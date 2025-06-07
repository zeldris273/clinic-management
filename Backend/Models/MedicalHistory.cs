using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models{

    public class MedicalHistory{
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public string Diagnosis { get; set; }
        public string Treatment { get; set; }
        public DateTime CreatedAt { get; set; }
    }

}