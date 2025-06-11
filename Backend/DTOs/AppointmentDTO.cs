  public class AppointmentDTO
    {
        public int Id { get; set; }
        public int PatiensId { get; set; }
        public int doctorId { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; }
    }

    public class AppointmentCreateDTO
    {
        public int PatiensId { get; set; }
        public int doctorId { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; }
    }