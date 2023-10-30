import { EventBus } from './EventBus.ts';
import { UserInfo } from '../types/types.ts';
import { set } from '../utils/set.ts';

export interface State {
  user?: UserInfo;
}

export enum StoreEvents {
  Updated = 'Updated',
}

class Store extends EventBus {
  private state: State = {};

  constructor() {
    super();
  }

  getState(): State {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated, this.state);
  }
}

export default new Store();
