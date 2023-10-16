import { tmpl } from './change-password.tmpl.ts';
import './change-password.scss';

import { Button } from '../../../../components/button/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';

import avatar from '../../../../assets/images/avatar.jpeg';
import Block from '../../../../core/Block.ts';
import { InputContainer } from '../../../../components/input-container';

export class ChangePassword extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
    });

    this.children.fields = [
      new InputContainer({
        className: 'password__input',
        type: 'password',
        name: 'oldPassword',
        id: 'oldPassword',
        label: 'Старый пароль:',
      }),
      new InputContainer({
        className: 'password__input',
        type: 'password',
        name: 'newPassword',
        id: 'newPassword',
        label: 'Новый пароль:',
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
