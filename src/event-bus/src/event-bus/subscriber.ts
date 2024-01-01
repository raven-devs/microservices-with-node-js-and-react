export interface Subscriber {
  onEvent(event: Event): void;
}
