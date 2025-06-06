
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Data;

namespace Backend.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorController : ControllerBase
    {
        private readonly DoctorService _doctorService;
        public DoctorController(DoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllDoctors()
        {
            var doctors = await _doctorService.GetAllDoctors();
            if (doctors == null || !doctors.Any())
                return NotFound("No doctors found");
            return Ok(doctors);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDoctorById(int id)
        {
            var doctor = await _doctorService.GetDoctorById(id);
            if (doctor == null)
                return NotFound("Doctor not found");
            return Ok(doctor);
        }


        [HttpPost("add")]
        public async Task<IActionResult> AddDoctor([FromBody] Doctor doctor)
        {
            var newDoctor = await _doctorService.AddDoctor(doctor);
            if (newDoctor == null)
                return BadRequest("Failed to add doctor");
            return Ok(newDoctor);
        }

        [HttpPost("delete/{id}")]
        public async Task<IActionResult> DeleteDoctor(int id)
        {
            var doctor = await _doctorService.DeleteDoctor(id);
            if (doctor == null)
                return BadRequest("Failed to delete doctor");
            return Ok("Doctor deleted successfully");
        }
    }
}