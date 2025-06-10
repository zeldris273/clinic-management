using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Backend.Services
{
    public class MedicalService
    {
        private readonly ClinicDbContext _context;
        private readonly IConfiguration _config;

        public MedicalService(ClinicDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        public async Task<List<MedicalHistory>> GetMedicalHistoryByUserId(int userId)
        {
            if (await _context.Users.AnyAsync(u => u.Id == userId))
            {
                return await _context.MedicalHistories.Where(m => m.UserId == userId).ToListAsync();
            }
            return new List<MedicalHistory>();
        }

        public async Task<MedicalHistory> AddMedicalHistory(MedicalHistory medicalHistory)
        {
            if (await _context.Users.AnyAsync(u => u.Id == medicalHistory.UserId))
            {
                medicalHistory.CreatedAt = DateTime.UtcNow;
                medicalHistory.Date = DateTime.UtcNow;
                medicalHistory.DoctorId = medicalHistory.DoctorId;
                medicalHistory.Diagnosis = medicalHistory.Diagnosis;
                medicalHistory.Treatment = medicalHistory.Treatment;
                _context.MedicalHistories.Add(medicalHistory);
                await _context.SaveChangesAsync();
                return medicalHistory;
            }
            return null;
        }

        public async Task<MedicalHistory> DeleteMedicalHistory(int id)
        {
            var medicalHistory = await _context.MedicalHistories.FindAsync(id);
            if (medicalHistory == null)
                return null;
            _context.MedicalHistories.Remove(medicalHistory);
            await _context.SaveChangesAsync();
            return medicalHistory;
        }

        public async Task<MedicalHistory> UpdateMedicalHistory(MedicalHistory mediacalHIS)
        {
            var medicalHistory = await _context.MedicalHistories.FindAsync(mediacalHIS.Id);
            if (medicalHistory == null)
                return null;
            medicalHistory.Date = mediacalHIS.Date;
            medicalHistory.DoctorId = mediacalHIS.DoctorId;
            medicalHistory.Diagnosis = mediacalHIS.Diagnosis;
            medicalHistory.Treatment = mediacalHIS.Treatment;
            _context.MedicalHistories.Update(medicalHistory);
            await _context.SaveChangesAsync();
            return medicalHistory;
        }
    }
}
