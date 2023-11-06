import { AvatarProps } from './types.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './avatar.tmpl.ts';
import { withStore } from '../../hocs/withStore.ts';
import { State } from '../../core/Store.ts';

export class BaseAvatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => {
  return {
    avatar: state.user?.avatar || '',
  };
};

export const Avatar = withStore(mapStateToProps)(BaseAvatar);
