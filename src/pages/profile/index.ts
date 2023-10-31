import { Link } from '../../components/link/index.ts';
import { Avatar } from '../../components/avatar/index.ts';

import avatar from '../../assets/images/avatar.jpeg';
import Block from '../../core/Block.ts';
import { tmpl } from './profile.tmpl.ts';
import { AuthController } from '../../controllers/AuthController.ts';
import { withStore } from '../../hocs/withStore.ts';
import { State } from '../../core/Store.ts';

export class BaseProfile extends Block {
  constructor() {
    super('main', {});
  }

  protected componentDidMount() {
    AuthController.fetchUser();
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
      username: 'Дастан Жамекешев',
    });
    this.children.editProfileLink = new Link({
      to: '/edit-profile',
      text: 'Изменить данные',
    });
    this.children.editPasswordLink = new Link({
      to: '/edit-password',
      text: 'Изменить пароль',
    });
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => {
  console.log(state);
  return { ...state.user };
};

export const Profile = withStore(mapStateToProps)(BaseProfile);
