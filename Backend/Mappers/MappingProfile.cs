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

    
    


  
}
