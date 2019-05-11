using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;
using EventBook.Models;
using Quartz;
namespace EventBook.MailServices
{
    public class SendMail: IJob
    {
        public void Execute(IJobExecutionContext context)
        {
             ScheduleMail();
        }

        public async Task SendMails(string Body, string Destination, string Subject)
        {
            //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  vivek account apikey 
            //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
            var client = new SendGridClient("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");

            var from = new EmailAddress("admin@eventbook.com", "Admin eventbook");
            var subject = Subject;
            var to = new EmailAddress(Destination, "User");
            var plainTextContent = Body;
            var htmlContent = "Hello," + "<br/><br/>" + Body;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
        public void ScheduleMail()
        {
            var client = new SendGridClient("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");

            var from = new EmailAddress("admin@eventbook.com", "Admin eventbook");
            var subject = "Schedule";
            var to = new EmailAddress("puttaprasanthi333@gmail.com");
            var plainTextContent = "check Schedule" ;
            var htmlContent = "Hello," + "<br/><br/>" + "subscribed user";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg);

        }
    }
}