import { Link } from '../../components/link/index.ts';
import { Avatar } from '../../components/avatar/index.ts';
import { Button } from '../../components/button/index.ts';

import avatar from '../../assets/images/avatar.jpeg';
import Block from '../../core/Block.ts';
import { tmpl } from './profile.tmpl.ts';
import { AuthController } from '../../controllers/AuthController.ts';
import { withStore } from '../../hocs/withStore.ts';
import { State } from '../../core/Store.ts';

export class BaseProfile extends Block {
  constructor() {
    super({});
  }

  protected componentDidMount() {
    AuthController.fetchUser();
  }

  init() {
    this.children.avatar = new Avatar({
      avatar,
      first_name: 'Дастан',
      second_name: 'Жамекешев',
    });
    this.children.editProfileLink = new Link({
      to: '/edit-profile',
      text: 'Изменить данные',
    });
    this.children.editPasswordLink = new Link({
      to: '/edit-password',
      text: 'Изменить пароль',
    });
    this.children.logoutButton = new Button({
      type: 'button',
      text: 'Выйти',
      events: {
        click: () => {
          return AuthController.logout();
        },
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => {
  return { ...state.user };
};

export const Profile = withStore(mapStateToProps)(BaseProfile);
