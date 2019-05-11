using EventBook.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Quartz;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventBook.MailSchedule
{
    public class ScheduledMail : IJob
    {
        private Entities2 db = new Entities2();

        public List<string> Users(int id)
        {
            List<string> li = new List<string>();
            UserManager<ApplicationUser> userManager;
            userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
            var x = (from n in db.SubscriptionTables where n.Event_Id == id select n.User_Id).ToList();
            foreach (var str in x)
            {
                li.Add(userManager.FindById(str).UserName);
            }
            return li;
        }
        public async void Priority(List<int> userIDs)
        {
            foreach (var edt in userIDs)
            {
                var eventDetails = (from ed in db.EventsTables where ed.EventId == edt select ed).ToList();
                var client = new SendGridClient("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");
                var msg = new SendGridMessage()
                {
                    From = new EmailAddress("admin@eventbook.com", "Admin eventbook"),
                    Subject = "Event reminder for" + eventDetails[0].EventName,
                    PlainTextContent = "dont miss the event on : " + eventDetails[0].Date + " at : " + eventDetails[0].Location

                };

                foreach (var ids in userIDs)
                {
                    List<string> list = Users(ids);
                    foreach (var str in list)
                    {
                        msg.AddTo(new EmailAddress(str, "user"));
                        var response = await client.SendEmailAsync(msg);
                    }
                }
            }
        }

        public void Execute(IJobExecutionContext context)
        {
            ScheduledMail sm = new ScheduledMail();
            var userIDs = (from x1 in db.SubscriptionTables where x1.Priority == "High" select x1.Event_Id).Distinct().ToList();
            sm.Priority(userIDs);
        }
    }
}