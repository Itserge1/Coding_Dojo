using System;
using System.ComponentModel.DataAnnotations;
namespace chefandDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId { get; set; }
        [Required(ErrorMessage = "Dish Must Have a Name")]
        public string DishName { get; set; }
        [Required(ErrorMessage = "Dish Must Have a Calories Number")]
        public int Calories { get; set; }
        [Required(ErrorMessage = "Dish Must Have a Description")]
        public string Description { get; set; }
        [Required(ErrorMessage = "Dish Must Have a Tastiness Number")]
        public int Tastiness { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public int ChefId { get; set; }
        public Chef Chef {get;set;}
    }
}