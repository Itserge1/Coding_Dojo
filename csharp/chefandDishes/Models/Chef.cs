using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace chefandDishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId { get; set; }
        [Required(ErrorMessage = "Chef Must Have a First Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Chef Must Have a Last Name")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Chef Must Have a Date Of Birth")]
        public DateTime DateOfBirth { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Dish> ChefDidhes {get;set;}
    }
}