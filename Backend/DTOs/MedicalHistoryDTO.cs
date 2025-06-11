public class MedicalHistoryDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PatiensId { get; set; }
        public DateTime Date { get; set; }
        public int DoctorId { get; set; }
        public string Diagnosis { get; set; }
        public string Treatment { get; set; }
    }