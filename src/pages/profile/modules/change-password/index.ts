import { tmpl } from './change-password.tmpl.ts';
import './change-password.scss';

import { Button } from '../../../../components/button/index.ts';
import { Input } from '../../../../components/input/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';

import avatar from '../../../../assets/images/avatar.jpeg';
import Block from '../../../../core/Block.ts';

export class ChangePassword extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
    });

    this.children.fields = [
      new Input({
        className: 'password__input',
        type: 'password',
        name: 'oldPassword',
        id: 'oldPassword',
      }),
      new Input({
        className: 'password__input',
        type: 'password',
        name: 'newPassword',
        id: 'newPassword',
      }),
    ];

    this.children.saveBtn = new Button({
      type: 'submit',
      className: 'password__save-btn',
      text: 'Сохранить',
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
