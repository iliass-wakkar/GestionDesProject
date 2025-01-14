using AutoMapper;
using GestionDesProjectBackEnd.Models;
using GestionDesProjectBackEnd.Models.Dtos;

using static System.Runtime.InteropServices.JavaScript.JSType;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        
        CreateMap<UsersDto, AppUsers>();



    }
}
