using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;


namespace ChefDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Required(ErrorMessage = "Dish must have a Name")]
        public string DishName {get;set;}
        [Required(ErrorMessage = "Dish must a Calories number")]
        public int Calories {get;set;}
        [Required(ErrorMessage = "Dish must have a Description")]
        public string Description {get;set;}
        [Required(ErrorMessage = "Dish must have a Tastiness number")]
        public int Tastiness {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

        // Add a foreing key to Dishes(we do this because of the one to many relationship between chef and dish.)
        [Required(ErrorMessage = "Dish must have a Chef")]
        public int  ChefId {get;set;}
        // We get an object to reference to the specific teaher id(we have acess to the specific teacher object)
        public Chef MyChef {get;set;}
    }

}