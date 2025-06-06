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
    public class MedicalHistoryController : ControllerBase
    {
        private readonly MedicalService _medicalService;
        public MedicalHistoryController(MedicalService medicalService)
        {
            _medicalService = medicalService;
        }
        
        [HttpGet("users/history/{userId}")]
        public async Task<IActionResult> GetMedicalHistory(int userId)
        {
            var medicalHistory = await _medicalService.GetMedicalHistoryByUserId(userId);
            if (medicalHistory == null || !medicalHistory.Any())
                return NotFound("No medical history found for this user");
            return Ok(medicalHistory);
        }


        [HttpPost("users/history/add")]
        public async Task<IActionResult> AddMedicalHistory([FromBody] MedicalHistory medicalHistory)
        {
            var newMedicalHistory = await _medicalService.AddMedicalHistory(medicalHistory);
            if (newMedicalHistory == null)
                return BadRequest("Failed to add medical history");
            return Ok(newMedicalHistory);
        }


        [HttpPost("user/history/delete/{id}")]
        public async Task<IActionResult> DeleteMedicalHistory(int id)
        {
            var medicalHistory = await _medicalService.DeleteMedicalHistory(id);
            if (medicalHistory == null)
                return BadRequest("Failed to delete medical history");
            return Ok("Medical history deleted successfully");
        }
    }
}