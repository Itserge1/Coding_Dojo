using System;
using System.ComponentModel.DataAnnotations;


namespace  DojoSurveyValidation.Models
{
    public class DojoSurvey
    {
        [Required(ErrorMessage = "Must add Name")]
        [MinLength (2,ErrorMessage = "Name must be at least 2 Characters")]
        public string name{get;set;}
        [Required (ErrorMessage = "Must add Location")]
        public string location{get;set;}
        [Required (ErrorMessage = "Must add a Language")]
        public string language{get;set;}
        [Required(ErrorMessage = "Must add a Comment")]
        public string comment{get;set;}
    }
}