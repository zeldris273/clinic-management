namespace Backend.Models;

public class Finance
{
    public int Id { get; set; }
    public int PatientId { get; set; }
    public int DoctorId { get; set; }
    public int Amount { get; set; }
    public string PaymentMethod { get; set; }
    public string PaymentStatus { get; set; }
    public string PaymentDate { get; set; }
    public string Service { get; set; }

    public virtual Patiens Patient { get; set; }
    public virtual Doctor Doctor { get; set; }
}
