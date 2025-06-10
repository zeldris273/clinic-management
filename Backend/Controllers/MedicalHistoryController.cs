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
    public class MedicalHistoryController : ControllerBase
    {
        private readonly MedicalService _medicalService;
        private readonly IMapper _mapper;

        public MedicalHistoryController(MedicalService medicalService, IMapper mapper)
        {
            _medicalService = medicalService;
            _mapper = mapper;
        }

        [HttpGet("users/history/{userId}")]
        public async Task<IActionResult> GetMedicalHistory(int userId)
        {
            var medicalHistory = await _medicalService.GetMedicalHistoryByUserId(userId);

            if (medicalHistory == null || !medicalHistory.Any())
                return NotFound("No medical history found for this user");

            return Ok(_mapper.Map<List<MedicalHistoryDTO>>(medicalHistory));
        }

        [HttpPost("users/history/add")]
        public async Task<IActionResult> AddMedicalHistory(
            [FromBody] MedicalHistoryDTO medicalHistoryDTO
        )
        {
            var newMedicalHistory = await _medicalService.AddMedicalHistory(
                _mapper.Map<MedicalHistory>(medicalHistoryDTO)
            );
            if (newMedicalHistory == null)
                return BadRequest("Failed to add medical history");
            return Ok(newMedicalHistory);
        }

        [HttpPut("user/history/update")]
        public async Task<IActionResult> UpdateMedicalHistory(MedicalHistoryDTO medicalHistoryDTO)
        {
            var updatedMedicalHistory = await _medicalService.UpdateMedicalHistory(
                _mapper.Map<MedicalHistory>(medicalHistoryDTO)
            );
            if (updatedMedicalHistory == null)
                return BadRequest("Failed to update medical history");
            return Ok(updatedMedicalHistory);
        }

        [HttpDelete("user/history/delete/{id}")]
        public async Task<IActionResult> DeleteMedicalHistory(int id)
        {
            var medicalHistory = await _medicalService.DeleteMedicalHistory(id);
            if (medicalHistory == null)
                return BadRequest("Failed to delete medical history");
            return Ok("Medical history deleted successfully");
        }
    }
}
