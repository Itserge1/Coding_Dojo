using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models
{
    public class User
    {
        [Key]
        public int UserId {get;set;}
        [Required(ErrorMessage="First Name Is Requierd")]
        public string FirstName {get;set;}
        [Required(ErrorMessage="Last Name Is Requierd")]
        public string LastName {get;set;}
        [Required(ErrorMessage="Email Is Requierd")]
        [EmailAddress]
        // email pattern A-Z0-9.com/net(A-Z)
        public string Email {get;set;}
        
        // line 22 make sure that we have a dot appearing in our input password box to 
        // make our password private
        // line 24 fix the length of or password
        [Required(ErrorMessage="Password Is Requierd")]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdateAt  {get;set;} = DateTime.Now;

        [NotMapped]
        [DataType(DataType.Password)]
        [Compare("Password")]
        [Required(ErrorMessage="Password Is not the same")]
        public string Confirm {get;set;}
    }

}