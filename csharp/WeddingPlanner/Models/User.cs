using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace WeddingPlanner.Models
{
    public class User
    {
        [Key]
        public int UserId {get;set;}
        [Required(ErrorMessage ="User must have a First Name")]
        [MinLength(2, ErrorMessage = "First Name must be 2 characters or more")]
        public string FirstName {get;set;}
        [Required(ErrorMessage ="User must have a Last Name")]
        [MinLength(2, ErrorMessage = "Last Name must be 2 characters or more")]
        public string LastName {get;set;}
        [Required(ErrorMessage ="User must have an Email")]
        [EmailAddress]
        public string Email {get;set;}
        [Required(ErrorMessage ="User must have a Password")]
        [MinLength(8,ErrorMessage ="Password Must be 8 characters or more")]
        [DataType(DataType.Password)]
        public string Password {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Guess> GuessI {get;set;}
        public List<Wedding> WeddinG{get;set;}

        [NotMapped]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword {get;set;}
    }
}