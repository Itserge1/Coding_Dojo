using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Exam.Models
{
    public class LogUser
    {
        [Required(ErrorMessage ="User must have an Email")]
        [EmailAddress]
        public string lEmail {get;set;}
        [Required(ErrorMessage ="User must have a Password")]
        [MinLength(8,ErrorMessage ="Password Must be 8 characters or more")]
        [DataType(DataType.Password)]
        public string lPassword {get;set;}
    }
}