import store, { State, StoreEvents } from '../core/Store.ts';
import Block from '../core/Block.ts';

export const withStore = (mapStateToProps: (state: State) => any) => {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(props: any) {
        super('', { ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.Updated, () => {
          const propsFromState = mapStateToProps(store.getState());
          this.setProps(propsFromState);
        });
      }
    };
  };
};
