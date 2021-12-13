using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ChefDishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId {get;set;}
        [Required(ErrorMessage = "Chef must have a First Name")]
        public string Firstname {get;set;}
        [Required(ErrorMessage = "Chef must have a Last Name")]
        public string Lastname {get;set;}
        public DateTime DateOfBirth{get;set;}
        [Required(ErrorMessage ="Chef must have a date of birth")]
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

        // We need to set up a list of dishes
        public List<Dish> ChefDishes {get;set;}
    }
}