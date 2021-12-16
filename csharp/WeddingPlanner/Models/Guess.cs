using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WeddingPlanner.Models
{
    public class Guess
    {
        [Key]
        public int GuessId {get;set;}
        public int UserId {get;set;}
        public int WeddingId {get;set;}

        public User UserI {get;set;}
        public Wedding WeddingI {get;set;}

    }
}