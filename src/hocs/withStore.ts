import store, { State, StoreEvents } from '../core/Store.ts';
import Block from '../core/Block.ts';

export const withStore = (mapStateToProps: (state: State) => any) => {
  return <P extends Record<string, unknown>>(Component: typeof Block<P>) => {
    return class extends Component {
      constructor(props: any) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.Updated, () => {
          const propsFromState = mapStateToProps(store.getState());
          this.setProps(propsFromState);
        });
      }
    };
  };
};
