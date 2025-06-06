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
        public string Prediction { get; set; }
        public string Method { get; set; }
        public DateTime CreatedAt { get; set; }
    }

}