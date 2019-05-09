import { EventEmitter } from 'events';

export class CountdownStore extends EventEmitter {
  constructor(count = 5, dispatcher) {
    super();

    this._count = count;
    this.dispatcherIndex = dispatcher.register(
      this.dispatcher.bind(this)
    );
  };

  getCount() {
    return this._count;
  };

  dispatch(payload) {
    const { type, count } = payload.action;

    switch (type) {
      case 'TICK': {
        this._count = this._count - 1;
        this.emit('TICK', this._count);
        break;
      }
      case 'RESET': {
        this._count = count;
        this.emit('RESET', this._count);
        break;
      }
      default: { break; }
    }
  };
}
