using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using Backend.Data;
using Backend.Models;
using BCrypt.Net;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Services
{
    public class AuthService
    {
        private readonly ClinicDbContext _context;
        private readonly IConfiguration _config;
        private readonly IMemoryCache _cache;

        public AuthService(ClinicDbContext context, IConfiguration config, IMemoryCache cache)
        {
            _context = context;
            _config = config;
            _cache = cache;
        }

        public async Task<bool> RegisterUser(string email, string password)
        {
            var existingUser = await _context.Users.AnyAsync(u => u.Email == email.Trim());
            if (existingUser)
                return false;

            var passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
            var user = new Backend.Models.User
            {
                Email = email.Trim(),
                PasswordHash = passwordHash,
                Role = UserRole.User, // Giá trị mặc định cho cột NOT NULL
                CreatedAt = DateTime.UtcNow, // Giá trị mặc định cho cột NOT NULL
            };

            _context.Users.Add(user);
            var rowsAffected = await _context.SaveChangesAsync();
            return rowsAffected > 0;
        }

        public async Task<User> ValidateUser(string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email.Trim());

            if (user != null && BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
                return user;

            return null;
        }

        public string GenerateJwtToken(User user)
        {
            var jwtKey = _config["Jwt:Key"];
            if (string.IsNullOrEmpty(jwtKey))
                throw new InvalidOperationException(
                    "JWT Key is not configured in appsettings.json"
                );

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public string GenerateRefreshToken(User user)
        {
            var refreshKey = _config["Jwt:RefreshKey"];
            if (string.IsNullOrEmpty(refreshKey))
                throw new InvalidOperationException(
                    "JWT Refresh Key is not configured in appsettings.json"
                );

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(refreshKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public User ValidateRefreshToken(string refreshToken)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var refreshKey = _config["Jwt:RefreshKey"];
            if (string.IsNullOrEmpty(refreshKey))
                throw new InvalidOperationException(
                    "JWT Refresh Key is not configured in appsettings.json"
                );

            var key = Encoding.UTF8.GetBytes(refreshKey);

            try
            {
                var principal = tokenHandler.ValidateToken(
                    refreshToken,
                    new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = _config["Jwt:Issuer"],
                        ValidAudience = _config["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                    },
                    out SecurityToken validatedToken
                );

                var userIdClaim = principal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userIdClaim))
                    return null;
                var roleClaim = principal.FindFirst(ClaimTypes.Role)?.Value;
                if (!Enum.TryParse<UserRole>(roleClaim, out var role))
                    role = UserRole.User;
                return new User
                {
                    Id = int.Parse(userIdClaim),
                    Email = principal.FindFirst(ClaimTypes.Name)?.Value,
                    Role = role,
                };
            }
            catch
            {
                return null;
            }
        }

        private string GenerateOtp()
        {
            Random random = new Random();
            return random.Next(100000, 999999).ToString();
        }

        public async Task<bool> SendOtp(string email)
        {
            email = email.Trim();
            if (string.IsNullOrEmpty(email))
                return false;

            var otp = GenerateOtp();
            try
            {
                var smtpClient = new SmtpClient(_config["Smtp:Host"])
                {
                    Port = int.Parse(_config["Smtp:Port"]),
                    Credentials = new NetworkCredential(
                        _config["Smtp:Username"],
                        _config["Smtp:Password"]
                    ),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_config["Smtp:Username"]),
                    Subject = "Your OTP Code",
                    Body = $"Your OTP code is: {otp}. It is valid for 5 minutes.",
                };
                mailMessage.To.Add(email);

                await smtpClient.SendMailAsync(mailMessage);
                _cache.Set(email, (otp, DateTime.UtcNow.AddMinutes(5)), TimeSpan.FromMinutes(5));

                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool VerifyOtp(string email, string otp)
        {
            email = email.Trim();
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(otp))
                return false;

            if (
                _cache.TryGetValue(email, out (string storedOtp, DateTime expires) stored)
                && DateTime.UtcNow <= stored.expires
                && stored.storedOtp == otp
            )
            {
                _cache.Remove(email);
                return true;
            }
            return false;
        }

        public async Task<bool> EmailExists(string email)
        {
            return await _context.Users.AnyAsync(u => u.Email == email.Trim());
        }

        public async Task<bool> ResetPassword(string email, string newPassword)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email.Trim());
            if (user == null)
                return false;

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(newPassword);
            var rowsAffected = await _context.SaveChangesAsync();
            return rowsAffected > 0;
        }
    }
}
