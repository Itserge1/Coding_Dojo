using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ProductCategories.Models
{
    public class Product
    {
        [Key]
        public int ProductId {get;set;}
        [Required(ErrorMessage="Product must have a Name")]
        public string ProductName {get;set;}
        [Required(ErrorMessage="Product must have a Description")]
        public string ProductDescription {get;set;}
        [Required(ErrorMessage="Product must have a Price")]
        public double ProductPrice {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Store> Seller {get;set;}

    }
}