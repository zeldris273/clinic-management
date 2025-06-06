using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Services{
    public class DoctorService{
        private readonly ClinicDbContext _context;
        private readonly IConfiguration _config;

        public DoctorService(ClinicDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        public async Task<List<Doctor>> GetAllDoctors()
        {
            return await _context.Doctors.ToListAsync();
        }

        public async Task<Doctor> AddDoctor(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }

        public async Task<Doctor> GetDoctorById(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor == null)
                return null;
            return doctor;
        }

        public async Task<Doctor> DeleteDoctor(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor == null)
                return null;
            _context.Doctors.Remove(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }

    }
}