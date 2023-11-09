import { Link } from '../../components/link/index.ts';
import { Avatar } from '../../components/avatar/index.ts';
import { Button } from '../../components/button/index.ts';

import avatar from '../../assets/images/avatar.jpeg';
import Block from '../../core/Block.ts';
import { tmpl } from './profile.tmpl.ts';
import { AuthController } from '../../controllers/AuthController.ts';
import { withStore } from '../../hocs/withStore.ts';
import { State } from '../../core/Store.ts';
import { Routes } from '../../types/types.ts';

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
      size: '130',
    });
    this.children.links = [
      new Link({
        to: Routes.EditProfile,
        text: 'Изменить данные',
      }),
      new Link({
        to: Routes.EditPassword,
        text: 'Изменить пароль',
      }),
      new Link({
        to: Routes.Chats,
        text: 'К чатам',
      }),
    ];
    this.children.logoutButton = new Button({
      type: 'button',
      text: 'Выйти',
      events: {
        click: () => AuthController.logout(),
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });

export const Profile = withStore(mapStateToProps)(BaseProfile);
