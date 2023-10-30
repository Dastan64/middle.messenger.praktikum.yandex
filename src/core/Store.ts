import { EventBus } from './EventBus.ts';
import { UserInfo } from '../types/types.ts';
import { set } from '../utils/set.ts';

interface State {
  user?: UserInfo;
}

enum StoreEvents {
  Updated = 'Updated',
}

class Store extends EventBus {
  private state: State = {};

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getState(): State {
    return this.state;
  }

  set(path: string, value: any) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated, this.state);
  }
}

export default new Store();
