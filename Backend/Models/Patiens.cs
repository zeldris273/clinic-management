using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Models
{
    public class Patiens
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int userId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }

        public User User { get; set; }
        public ICollection<MedicalHistory> MedicalHistories { get; set; }
    }
}
