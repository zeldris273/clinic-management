using AutoMapper;
using Backend.Models;
using Backend.Services;

namespace Backend.Data
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Patiens, PatientDetailDTO>();
            CreateMap<Patiens, PatientCreateDTO>();
            CreateMap<Patiens, PatientUpdateDTO>();

            CreateMap<PatientCreateDTO, Patiens>();
            CreateMap<PatientUpdateDTO, Patiens>();
            CreateMap<PatientDetailDTO, Patiens>();

            CreateMap<User, UserDTO>();
            CreateMap<MedicalHistory, MedicalHistoryDTO>();
            CreateMap<MedicalHistoryDTO, MedicalHistory>();

            CreateMap<Doctor, DoctorCreateDTO>();
            CreateMap<DoctorCreateDTO, Doctor>();
            CreateMap<Doctor, DoctorUpdateDTO>();
            CreateMap<DoctorUpdateDTO, Doctor>();

            CreateMap<Appointment, AppointmentCreateDTO>();
            CreateMap<AppointmentCreateDTO, Appointment>();
            CreateMap<Appointment, AppointmentDTO>();
            CreateMap<AppointmentDTO, Appointment>();
        }
    }

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

    public class UserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }

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
}
