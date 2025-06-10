using AutoMapper;
using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class PatientService
    {
        private readonly ClinicDbContext _context;
        private readonly IMapper _mapper;

        public PatientService(ClinicDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<Patiens>> GetAllPatients()
        {
            return await _context.Patiens.Include(p => p.MedicalHistories).ToListAsync();
        }

        public async Task<PatientDetailDTO> GetPatient(int id)
        {
            var patient = await _context
                .Patiens.Include(p => p.MedicalHistories)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (patient == null)
                return null;
            return _mapper.Map<PatientDetailDTO>(patient);
        }

        public async Task<Patiens> DeletePatient(int id)
        {
            var deletedPatient = await _context.Patiens.FindAsync(id);
            if (deletedPatient == null)
                return null;
            _context.Patiens.Remove(deletedPatient);
            await _context.SaveChangesAsync();
            return deletedPatient;
        }

        public async Task<Patiens> CreatePatient(Patiens patient)
        {
            await _context.Patiens.AddAsync(patient);
            await _context.SaveChangesAsync();
            return patient;
        }


        public async Task<Patiens> UpdatePatient(Patiens patient)
        {
            Console.WriteLine(patient.Id + " " + patient.userId + " " + patient.Name + " " + patient.Phone);
            var updatedPatient = await _context.Patiens.FindAsync(patient.Id);
            if (updatedPatient == null)
                return null;
            updatedPatient.Name = patient.Name;
            updatedPatient.Phone = patient.Phone;
            _context.Patiens.Update(updatedPatient);
            await _context.SaveChangesAsync();
            return updatedPatient;
        }
    }
}
