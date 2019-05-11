using EventBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventBook.Controllers
{
    public class CategoryController : ApiController
    {
        private Entities2 db = new Entities2();
        [HttpPost]
        [Route("ComedyCategory")]
        public IQueryable<EventsTable> ComedyCategory(Category c)
        {
            var x = from n in db.EventsTables where n.Category == c.cat select n;
            return x;
        }
        [HttpPost]
        [Route("FoodDrinkCategory")]
        public IQueryable<EventsTable> FoodDrinkCategory(Category c)
        {
            var x = from n in db.EventsTables where n.Category == c.cat select n;
            return x;
        }
        [HttpPost]
        [Route("MoviesCategory")]
        public IQueryable<EventsTable> MoviesCategory(Category c)
        {
            var x = from n in db.EventsTables where n.Category == c.cat select n;
            return x;
        }
        [HttpPost]
        [Route("SportsCategory")]
        public IQueryable<EventsTable> SportsCategory(Category c)
        {
            var x = from n in db.EventsTables where n.Category == c.cat select n;
            return x;
        }
        [HttpPost]
        [Route("MusicCategory")]
        public IQueryable<EventsTable> MusicCategory(Category c)
        {
            var x = from n in db.EventsTables where n.Category == c.cat select n;
            return x;
        }
        [HttpPost]
        [Route("UserEvents")]
        public IQueryable<EventsTable> UserEvents(Category c)
        {
            var x = from n in db.EventsTables where n.UserId == c.userid select n;
            return x;
        }
        [HttpPost]
        [Route("BookedEvents")]
        public IQueryable<BookingTable> BookedEvents(Category c)
        {
            var x = from n in db.BookingTables where n.User_Id == c.userid select n;
            return x;
        }
        [HttpPost]
        [Route("UserBookedEvents")]
        public IQueryable<EventsTable> UserBookedEvents(Category c)
        {
            var x = from n in db.EventsTables where n.EventId == c.eventId select n;
            return x;
        }
        [HttpPost]
        [Route("Unsubscribe")]
        public IQueryable<SubscriptionTable> Unsubscribe(Category c)
        {
            var x = from n in db.SubscriptionTables where n.Event_Id == c.eventId && n.User_Id==c.userid select n;
           return x;
        }
        [HttpPost]
        [Route("SubscribedEvents")]
        public IQueryable<SubscriptionTable> SubscribedEvents(Category c)
        {
            var x = from n in db.SubscriptionTables where n.User_Id == c.userid select n;
            return x;
        }
        [HttpPost]
        [Route("UserSubscribedEvents")]
        public IQueryable<EventsTable> UserSubscribedEvents(Category c)
        {
            var x = from n in db.EventsTables where n.EventId == c.eventId select n;
            return x;
        }

    }
}
