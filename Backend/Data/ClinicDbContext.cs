using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class ClinicDbContext : DbContext
    {
        public ClinicDbContext(DbContextOptions<ClinicDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<MedicalHistory> MedicalHistories { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
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
          
          
            modelBuilder.Entity<MedicalHistory>().ToTable("MedicalHistory");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.Id).HasColumnName("Id");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.UserId).HasColumnName("UserId");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.Date).HasColumnName("Date");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.DoctorId).HasColumnName("DoctorId");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.Prediction).HasColumnName("Prediction");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.Method).HasColumnName("Method");
            modelBuilder.Entity<MedicalHistory>().Property(u => u.CreatedAt).HasColumnName("CreatedAt").HasDefaultValueSql("CURRENT_TIMESTAMP");

            modelBuilder.Entity<Doctor>().ToTable("Doctors");
            modelBuilder.Entity<Doctor>().Property(u => u.Id).HasColumnName("Id");
            modelBuilder.Entity<Doctor>().Property(u => u.Name).HasColumnName("Name");
            modelBuilder.Entity<Doctor>().Property(u => u.Specialization).HasColumnName("Specialization");
            modelBuilder.Entity<Doctor>().Property(u => u.Experience).HasColumnName("Experience");
            modelBuilder.Entity<Doctor>().Property(u => u.Education).HasColumnName("Education");
            modelBuilder.Entity<Doctor>().Property(u => u.Contact).HasColumnName("Contact");
            modelBuilder.Entity<Doctor>().Property(u => u.Address).HasColumnName("Address");
            modelBuilder.Entity<Doctor>().Property(u => u.Image).HasColumnName("Image");
       
        }
    }
}