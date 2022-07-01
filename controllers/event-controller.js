import Event from '../models/event.js'
import dataCleaner from '../utilities/data-cleaner.js'

const eventController = {
    // GET /api/events/
    getAllEvents: function (req, res) {
        Event.find({}, function (err, events) {
            if (err || !events || events.length == 0) {
                res.sendStatus(404)
            }
            else {
                res.status(200).send(dataCleaner.cleanEvents(events))
            }
        })
    },

    // GET /api/events/:event_id
    getEventByID: (req, res) => {
        Event.findOne({ 'EVENT_ID': rew.params.event_id }, '', (err, event) => {
            if (err || event) {
                res.sendStatus(404)
            }
            else {
                res.status(200).send(dataCleaner.cleanEvent(event))
            }
        })
    }
}

export default eventController