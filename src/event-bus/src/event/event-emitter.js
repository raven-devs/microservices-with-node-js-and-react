const axios = require('axios');
const { EventServiceLocator } = require('./event-service-locator');

class EventEmitter {
  static async emit(event) {
    await axios.post(EventServiceLocator.Posts.url, event);
    await axios.post(EventServiceLocator.Comments.url, event);
    await axios.post(EventServiceLocator.Query.url, event);
    await axios.post(EventServiceLocator.Moderation.url, event);
  }
}

module.exports = {
  EventEmitter,
};
