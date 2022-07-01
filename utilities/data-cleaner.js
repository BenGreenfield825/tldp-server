import Customer from '../models/customer.js'
import Event from '../models/event.js'

const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  },  

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  },

  cleanEvent: ( event ) => {
    return {
      id: event.EVENT_ID,
      eventCode: event.EVENT_CODE,
      title: event.EVENT_TITLE,
      description: event.EVENT_DESC
    }
  },

  cleanEvents: ( events ) => {
    var eventResults = []
    for(const e in events) {
      eventResults.push(dataCleaner.cleanEvent(events[e]))
    }
    return eventResults
  }

}

export default dataCleaner