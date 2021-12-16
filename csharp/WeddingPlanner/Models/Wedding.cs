using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;


namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId {get;set;}
        [Required(ErrorMessage ="WedderOne must have a First Name")]
        [MinLength(2, ErrorMessage = "WedderOne's Name must be 2 characters or more")]
        public string WedderOne {get;set;}
        [Required(ErrorMessage ="WedderTwo must have a Name")]
        [MinLength(2, ErrorMessage = "WedderTwo's Name must be 2 characters or more")]
        public string WedderTwo {get;set;}
        [Required(ErrorMessage ="Wedding must have a Date")]
        public DateTime Date {get;set;}
        [Required(ErrorMessage ="Wedding must have an Adress")]
        public string Adress {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Guess> GuessI {get;set;}
        public int UserId {get;set;}
    }
}