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

namespace EventBook.Controllers
{
    public class BookingTablesController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/BookingTables
        public IQueryable<BookingTable> GetBookingTables()
        {
            return db.BookingTables;
        }

        // GET: api/BookingTables/5
        [ResponseType(typeof(BookingTable))]
        public IHttpActionResult GetBookingTable(int id)
        {
            BookingTable bookingTable = db.BookingTables.Find(id);
            if (bookingTable == null)
            {
                return NotFound();
            }

            return Ok(bookingTable);
        }

        // PUT: api/BookingTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBookingTable(int id, BookingTable bookingTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookingTable.Ticket_Id)
            {
                return BadRequest();
            }

            db.Entry(bookingTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingTableExists(id))
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

        // POST: api/BookingTables
        [ResponseType(typeof(BookingTable))]
        public IHttpActionResult PostBookingTable(BookingTable bookingTable)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                db.BookingTables.Add(bookingTable);
                db.SaveChanges();

                return CreatedAtRoute("DefaultApi", new { id = bookingTable.Ticket_Id }, bookingTable);
            }
            catch
            {
                return NotFound();
            }
            
        }

        // DELETE: api/BookingTables/5
        [ResponseType(typeof(BookingTable))]
        public IHttpActionResult DeleteBookingTable(int id)
        {
            BookingTable bookingTable = db.BookingTables.Find(id);
            if (bookingTable == null)
            {
                return NotFound();
            }

            db.BookingTables.Remove(bookingTable);
            db.SaveChanges();

            return Ok(bookingTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookingTableExists(int id)
        {
            return db.BookingTables.Count(e => e.Ticket_Id == id) > 0;
        }
       
        /*internal class TicketsBookedLine
        {
            public int TicketsBooked { get; set; }
        }
        [Route("BookedTickets")]
        public IQueryable<TicketsBookedLine> Category(int id)
        {

            var results = from n in db.BookingTables
                          group n by n.EventId into g
                          select new TicketsBookedLine
                          {
                              
                              TicketsBooked = g.Sum(_ => _.NoOfTickets)
                             
                          };
            return results;
        }
        */
    }
}