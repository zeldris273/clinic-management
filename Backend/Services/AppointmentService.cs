using AutoMapper;
using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class AppointmentService
    {
        private readonly IMapper _imapper;
        private readonly ClinicDbContext _clinicDbContext;

        public AppointmentService(ClinicDbContext clinicDbContext, IMapper imapper)
        {
            _clinicDbContext = clinicDbContext;
            _imapper = imapper;
        }

        public async Task<Appointment> AddAppointment(Appointment appointment)
        {
            _clinicDbContext.Appointments.Add(appointment);
            await _clinicDbContext.SaveChangesAsync();
            return appointment;
        }

        public async Task<Appointment> GetAppointment(int id)
        {
            var appointment = await _clinicDbContext
                .Appointments.Include(a => a.Patiens)
                .Include(a => a.Doctor)
                .FirstOrDefaultAsync(a => a.Id == id);

            if (appointment == null)
                return null;
            return appointment;
        }

        public async Task<List<Appointment>> GetAllAppointments()
        {
            var appointments = await _clinicDbContext
                .Appointments.Include(a => a.Patiens)
                .Include(a => a.Doctor)
                .ToListAsync();

            if (appointments == null)
                return null;
            return appointments;
        }

        public async Task<Appointment> DeleteAppointment(int id)
        {
            var appointment = await _clinicDbContext.Appointments.FirstOrDefaultAsync(a =>
                a.Id == id
            );

            if (appointment == null)
                return null;
            _clinicDbContext.Appointments.Remove(appointment);
            await _clinicDbContext.SaveChangesAsync();
            return appointment;
        }

        public async Task<Appointment> UpdateAppointment(int id, Appointment appointment)
        {
            var app = await _clinicDbContext.Appointments.FirstOrDefaultAsync(a =>
                a.Id == id
            );

            if (app == null)
                return null;
            app.PatiensId = appointment.PatiensId;
            app.doctorId = appointment.doctorId;
            app.Date = appointment.Date;
            app.Type = appointment.Type;
            _clinicDbContext.Appointments.Update(app);
            await _clinicDbContext.SaveChangesAsync();
            return app;
        }
    }
}
