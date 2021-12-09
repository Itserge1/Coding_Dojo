using System;
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Required(ErrorMessage = "Chef must have a name")]
        public string ChefName {get;set;}
        [Required (ErrorMessage = "Dish must have a name")]
        public string Name {get;set;}
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Calories must be more than 0")]
        public int Calories {get;set;}
        [Required  (ErrorMessage = "Tastiness must be field")]
        public int Tastiness {get;set;}
        [Required (ErrorMessage = "Description must be field")]
        public string Description {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}