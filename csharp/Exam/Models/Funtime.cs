using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace Exam.Models
{
    public class Funtime
    {
        [Key]
        public int FuntimeId {get;set;}
        [Required(ErrorMessage ="User must have a  Title")]
        [MinLength(2, ErrorMessage = " Title must be 2 characters or more")]
        public string Title {get;set;}
        [Required(ErrorMessage ="Activity must have an Time")]
        [DataType(DataType.Time)]
        public DateTime Time {get;set;}
        [Required(ErrorMessage ="Activity must have a Date")]
        [DataType(DataType.Date)]
        public DateTime Date {get;set;}
        [Required(ErrorMessage ="Activity must have a Duration")]
        public int Duration {get;set;}
        [Required(ErrorMessage ="Activity must have a DurationAmout")]
        public string DurationAmount {get;set;}
        [Required(ErrorMessage ="Activity must have a Description")]
        public string Description {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Guess> GessesI {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}

    }
}