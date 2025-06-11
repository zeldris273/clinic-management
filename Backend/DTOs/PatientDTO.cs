public class PatientCreateDTO
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
    }

    public class PatientUpdateDTO
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
    }

    public class PatientDetailDTO
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public List<MedicalHistoryDTO> MedicalHistories { get; set; }
    }
