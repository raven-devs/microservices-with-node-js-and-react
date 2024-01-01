const { EventEmitter } = require('./event-emitter');
const { EventDao } = require('./event-dao');

// send an event to other services
class EventHandler {
  static async handle(event) {
    EventDao.data.push(event);

    await EventEmitter.emit(event);
  }
}

module.exports = {
  EventHandler,
};
