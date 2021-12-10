using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models
{
    public class LogUser
    {
        [Required(ErrorMessage="Email Is Requierd")]
        [EmailAddress]
        // email pattern A-Z0-9.com/net(A-Z)
        public string lEmail {get;set;}
        
        // line 22 make sure that we have a dot appearing in our input password box to 
        // make our password private
        // line 24 fix the length of or password
        [Required(ErrorMessage="Password Is Requierd")]
        [DataType(DataType.Password)]
        public string lPassword {get;set;}
    }
}