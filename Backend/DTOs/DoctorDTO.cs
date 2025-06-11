public class DoctorDTO
{
    public int userId { get; set; }
    public string Name { get; set; }
    public string Specialization { get; set; }
    public string Experience { get; set; }
    public string Education { get; set; }
    public string Contact { get; set; }
    public string Address { get; set; }
    public string Image { get; set; }
}

public class DoctorCreateDTO
{
    public int userId { get; set; }
    public string Name { get; set; }
    public string Specialization { get; set; }
    public string Experience { get; set; }
    public string Education { get; set; }
    public string Contact { get; set; }
    public string Address { get; set; }
    public string Image { get; set; }
}

public class DoctorUpdateDTO
{
    public int Id { get; set; }
    public int userId { get; set; }
    public string Name { get; set; }
    public string Specialization { get; set; }
    public string Experience { get; set; }
    public string Education { get; set; }
    public string Contact { get; set; }
    public string Address { get; set; }
    public string Image { get; set; }
}