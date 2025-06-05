using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class ClinicDbContext : DbContext
    {
        public ClinicDbContext(DbContextOptions<ClinicDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users"); // Ánh xạ bảng Users
            modelBuilder.Entity<User>().Property(u => u.Id).HasColumnName("Id");
            modelBuilder.Entity<User>().Property(u => u.Email).HasColumnName("Email");
            modelBuilder.Entity<User>().Property(u => u.PasswordHash).HasColumnName("PasswordHash");
             modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasColumnName("Role")
                .HasConversion<string>()
                .HasDefaultValue(UserRole.User);
            modelBuilder.Entity<User>().Property(u => u.CreatedAt).HasColumnName("CreatedAt").HasDefaultValueSql("CURRENT_TIMESTAMP");

        }
    }
}