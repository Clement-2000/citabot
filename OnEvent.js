class OnEvent {
  constructor(eventName) {
    this._eventName = eventName;
  }

  get eventName() {
    return this._eventName;
  }
}

module.exports = OnEvent;
