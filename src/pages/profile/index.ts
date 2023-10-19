import { Link } from '../../components/link/index.ts';
import { Avatar } from '../../components/avatar/index.ts';

import avatar from '../../assets/images/avatar.jpeg';
import Block from '../../core/Block.ts';
import { tmpl } from './profile.tmpl.ts';

export class Profile extends Block {
  constructor() {
    super('main', {});
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
