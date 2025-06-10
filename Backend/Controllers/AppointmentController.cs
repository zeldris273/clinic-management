using AutoMapper;
using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentController : ControllerBase
    {
        private readonly AppointmentService _appointmentService;
        private readonly IMapper _imapper;

        public AppointmentController(AppointmentService appointmentService, IMapper imapper)
        {
            _appointmentService = appointmentService;
            _imapper = imapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAppointment(int id)
        {
            var appointment = await _appointmentService.GetAppointment(id);
            if (appointment == null)
                return NotFound("Appointment not found");
            return Ok(_imapper.Map<AppointmentDTO>(appointment));
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllAppointments()
        {
            var appointments = await _appointmentService.GetAllAppointments();
            if (appointments == null)
                return NotFound("No appointments found");
            return Ok(_imapper.Map<List<AppointmentDTO>>(appointments));
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddAppointment(
            [FromBody] AppointmentCreateDTO appointmentCreateDTO
        )
        {
            var newAppointment = await _appointmentService.AddAppointment(
                _imapper.Map<Appointment>(appointmentCreateDTO)
            );
            if (newAppointment == null)
                return BadRequest("Failed to add appointment");
            return Ok(_imapper.Map<AppointmentDTO>(newAppointment));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAppointment(
            int id,
            AppointmentCreateDTO appointmentCreateDTO
        )
        {
            var updatedAppointment = await _appointmentService.UpdateAppointment(
                id,
                _imapper.Map<Appointment>(appointmentCreateDTO)
            );
            if (updatedAppointment == null)
                return NotFound("Appointment not found");
            return Ok(_imapper.Map<AppointmentDTO>(updatedAppointment));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var deletedAppointment = await _appointmentService.DeleteAppointment(id);
            if (deletedAppointment == null)
                return NotFound("Appointment not found");
            return Ok(_imapper.Map<AppointmentDTO>(deletedAppointment));
        }
    }
}
