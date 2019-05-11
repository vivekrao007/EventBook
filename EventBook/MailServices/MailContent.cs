using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventBook.MailServices
{
    public class MailContent
    {
        public virtual string Body { get; set; }
        public virtual string Destination { get; set; }
        public virtual string Subject { get; set; }
    }
}