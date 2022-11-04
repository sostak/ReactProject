using UsersAPI.DomainServices;
using UsersAPI.Dtos;
using UsersAPI.Entities;
using UsersAPI.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using EasyNetQ;
using Newtonsoft;
using Npgsql;
using System.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UsersAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService service)
        {
            usersService = service;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public List<UserDto> Get()
        {
            return usersService.GetUsers();
        }

        // GET api/<UsersController>/id
        [HttpGet("{id}")]
        public UserDto Get(string id)
        {
            return usersService.GetUser(id);
        }

        // POST api/<UsersController>
        [HttpPost()]
        public UserDto Post(UserDto user)
        {
            return usersService.PostNewUser(user); ;
        }

        // DELETE api/<UsersController>/id
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            usersService.DeleteUser(id);
        }

        // UPDATE api/<UsersController>/id
        [HttpPut("{id}")]
        public UserDto Put(int id, UserDto user)
        {
            return usersService.UpdateUser(id, user);
        }
    }
}
