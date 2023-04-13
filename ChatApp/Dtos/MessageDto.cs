using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Dtos
{
    public class MessageDto
    {
        [Required]
        public string From { get; set; }

        public string To { get; set; }

        [Required]
        public string Content { get; set; }
    }
}
