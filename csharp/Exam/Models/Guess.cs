using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace Exam.Models
{
    public class Guess
    {
        [Key]
        public int GuessId {get;set;}
        public int UserId {get;set;}
        public int FuntimeId {get;set;}
        public Funtime FuntimeI {get;set;}
        public User UserI {get;set;}
    }
}