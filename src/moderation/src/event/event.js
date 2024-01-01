class Event {
  type;
  payload;

  constructor({ type, payload }) {
    this.type = type;
    this.payload = payload;
  }
}

module.exports = {
  Event,
};
