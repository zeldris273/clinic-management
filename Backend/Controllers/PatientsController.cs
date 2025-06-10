using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : ControllerBase
    {
        private readonly PatientService _patientService;
        private readonly MedicalService _medicalService;
        private readonly IMapper _imapper;

        public PatientsController(
            PatientService patientService,
            MedicalService medicalService,
            IMapper imapper
        )
        {
            _patientService = patientService;
            _medicalService = medicalService;
            _imapper = imapper;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePatient([FromBody] PatientCreateDTO patient)
        {
            var createdPatient = await _patientService.CreatePatient(
                _imapper.Map<Patiens>(patient)
            );
            return Ok(createdPatient);
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdatePatient(PatientUpdateDTO patient)
        {
            var updatedPatient = await _patientService.UpdatePatient(
                _imapper.Map<Patiens>(patient)
            );
            if (updatedPatient == null)
                return NotFound("Patient not found");
            return Ok(updatedPatient);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var deletedPatient = await _patientService.DeletePatient(id);
            if (deletedPatient == null)
                return NotFound("Patient not found");
            return Ok(deletedPatient);
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllPatients()
        {
            var patients = await _patientService.GetAllPatients();
            if (patients == null)
                return NotFound("No patients found");
            return Ok(patients);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPatient(int id)
        {
            var patient = await _patientService.GetPatient(id);
            if (patient == null)
                return NotFound("Patient not found");
            return Ok(patient);
        }


    }
}
