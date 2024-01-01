const axios = require('axios');
const { EventServiceLocator } = require('./event-service-locator');

class EventEmitter {
  static async emit(event) {
    await axios.post(EventServiceLocator.EventBus.url, event);
  }
}

module.exports = {
  EventEmitter,
};
