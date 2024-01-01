import { EventType } from './event-type';

export class Event {
  type: EventType;
  payload: unknown;

  constructor({ type, payload }: { type: EventType; payload: unknown }) {
    this.type = type;
    this.payload = payload;
  }
}
