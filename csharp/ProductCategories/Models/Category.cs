using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ProductCategories.Models
{
    public class Category
    {
        [Key]
        public int CategoryId {get;set;}
        [Required(ErrorMessage = "Category must have a Name")]
        public string CategoryName {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Store> Seller {get;set;}
    }
}