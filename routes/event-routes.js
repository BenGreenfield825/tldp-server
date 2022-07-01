import express from 'express'
var eventRouter = express.Router()
// import customerController from '../controllers/customer-controller.js'
import eventController from '../controllers/event-controller.js'

// // GET /api/customers
// customerRouter.get('/', function(req, res) {
//   customerController.getAllCustomers(req, res)
// })

// GET /api/events
eventRouter.get('/', function (req, res) {
  eventController.getAllEvents(req, res)
})

  // GET /api/events/:event_id

  // POST /api/events

  // DELETE /api/events/:event_id