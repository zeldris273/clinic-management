using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Models{
    public class Doctor{
        public int Id { get; set; }
        public string Name { get; set; }
        public string Specialization { get; set; }
        public string Experience { get; set; }
        public string Education { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
    }
}