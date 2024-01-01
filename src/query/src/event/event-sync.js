const axios = require('axios');
const { EventServiceLocator } = require('./event-service-locator');
const { EventHandlerFactory } = require('./event-handler/event-handler-factory');

class EventSync {
  static async sync() {
    try {
      const response = await axios.get(EventServiceLocator.EventBus.url);
      const events = response.data;

      for (const event of events) {
        const { type, payload } = event;

        const eventHandler = EventHandlerFactory.create(type);
        if (eventHandler) {
          await eventHandler.handle(payload);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = {
  EventSync,
};
