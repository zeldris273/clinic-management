using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorController : ControllerBase
    {
        private readonly DoctorService _doctorService;
        private readonly IMapper _imapper;

        public DoctorController(DoctorService doctorService, IMapper imapper)
        {
            _doctorService = doctorService;
            _imapper = imapper;
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
        public async Task<IActionResult> AddDoctor([FromBody] DoctorCreateDTO doctorCreateDTO)
        {
            var newDoctor = await _doctorService.AddDoctor(_imapper.Map<Doctor>(doctorCreateDTO));
            if (newDoctor == null)
                return BadRequest("Failed to add doctor");
            return Ok(newDoctor);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteDoctor(int id)
        {
            var doctor = await _doctorService.DeleteDoctor(id);
            if (doctor == null)
                return BadRequest("Failed to delete doctor");
            return Ok("Doctor deleted successfully");
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateDoctor(DoctorUpdateDTO doctorUpdateDTO)
        {
            var updatedDoctor = await _doctorService.UpdateDoctor(
                _imapper.Map<DoctorUpdateDTO>(doctorUpdateDTO)
            );
            if (updatedDoctor == null)
                return BadRequest("Failed to update doctor");
            return Ok(updatedDoctor);
        }
    }
}
