export interface EventBusSubscriber {
  subscribe(subscriber: Subscriber): void;
  unsubscribe(subscriber: Subscriber): void;
}
