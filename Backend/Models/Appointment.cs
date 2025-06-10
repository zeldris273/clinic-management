using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Backend.Models;

namespace Backend.Models
{
    public class Appointment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int PatiensId { get; set; }
        public int doctorId { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; }

        public Doctor Doctor { get; set; }
        public Patiens Patiens { get; set; }
    }
}
