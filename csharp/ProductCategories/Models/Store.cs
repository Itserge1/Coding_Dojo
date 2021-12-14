using System;
using System.ComponentModel.DataAnnotations;

namespace ProductCategories.Models
{
    public class Store
    {
        [Key]
        public int StoreId {get;set;}
        public int ProductId {get;set;}
        public int CategoryId {get;set;}
        public Product Product {get;set;}
        public Category Category {get;set;}
    }
}