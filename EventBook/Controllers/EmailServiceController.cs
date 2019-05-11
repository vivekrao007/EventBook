using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventBook.MailServices;
using EventBook.Models;
using System.Threading.Tasks;

namespace EventBook.Controllers
{
    public class EmailServiceController : ApiController
    {
        [Route("sendmail")]
        public async Task<IHttpActionResult> SendMailToUser(MailContent obj)
        {
            SendMail s = new SendMail();
            await s.SendMails(obj.Body, obj.Destination, obj.Subject);
            return Ok();
        }
    }
}
