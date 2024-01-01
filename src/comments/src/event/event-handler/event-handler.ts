export interface EventHandler {
  handle(payload: unknown): Promise<void>;
}
