import axios from 'axios';
import { Event } from './event';
import { EventServiceLocator } from './event-service-locator';

export class EventEmitter {
  static async emit(event: Event) {
    await axios.post(EventServiceLocator.EventBus.url, event);
  }
}
