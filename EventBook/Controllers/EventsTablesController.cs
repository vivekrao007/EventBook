using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EventBook.Models;
using System.Data.Entity.Validation;

namespace EventBook.Controllers
{
    public class EventsTablesController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/EventsTables
        public IQueryable<EventsTable> GetEventsTables()
        {
            return db.EventsTables;
        }

        // GET: api/EventsTables/5
        [ResponseType(typeof(EventsTable))]
        public IHttpActionResult GetEventsTable(int id)
        {
            EventsTable eventsTable = db.EventsTables.Find(id);
            if (eventsTable == null)
            {
                return NotFound();
            }

            return Ok(eventsTable);
        }

        // PUT: api/EventsTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEventsTable(int id, EventsTable eventsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventsTable.EventId)
            {
                return BadRequest();
            }

            db.Entry(eventsTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventsTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EventsTables
        [ResponseType(typeof(EventsTable))]
        public IHttpActionResult PostEventsTable(EventsTable eventsTable)
        {
            try
            {
                if (!ModelState.IsValid)
                {

                    return BadRequest(ModelState);
                }

                db.EventsTables.Add(eventsTable);

                db.SaveChanges();



                return CreatedAtRoute("DefaultApi", new { id = eventsTable.EventId }, eventsTable);
            }
            catch
            {
                return NotFound();
            }
        }

        // DELETE: api/EventsTables/5
        [ResponseType(typeof(EventsTable))]
        public IHttpActionResult DeleteEventsTable(int id)
        {
            EventsTable eventsTable = db.EventsTables.Find(id);
            var sub = from n in db.SubscriptionTables where n.Event_Id == id select n;
            var book = from n in db.BookingTables where n.EventId == id select n;
            SubscriptionTable st = (SubscriptionTable)sub.FirstOrDefault();
            BookingTable bt = (BookingTable)book.FirstOrDefault();
            if (st != null)
            {
                db.SubscriptionTables.Remove(st);
                db.SaveChanges();
            }
            if (bt != null)
            {
                db.BookingTables.Remove(bt);
                db.SaveChanges();
            }

            //EventsTable eventsTable = db.EventsTables.Find(id);
            if (eventsTable == null)
            {
                return NotFound();
            }

            db.EventsTables.Remove(eventsTable);
            db.SaveChanges();

            return Ok(eventsTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventsTableExists(int id)
        {
            return db.EventsTables.Count(e => e.EventId == id) > 0;
        }
    }
}