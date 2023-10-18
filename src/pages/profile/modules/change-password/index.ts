import { tmpl } from './change-password.tmpl.ts';
import './change-password.scss';

import { Button } from '../../../../components/button/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { EditPasswordForm } from '../../../../modules/edit-password-form';

import avatar from '../../../../assets/images/avatar.jpeg';
import Block from '../../../../core/Block.ts';

export class ChangePassword extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
      username: 'Дастан Жамекешев',
    });

    this.children.editPasswordForm = new EditPasswordForm({
      inputs: [
        new InputContainer({
          className: 'password-form__input',
          type: 'password',
          name: 'oldPassword',
          id: 'oldPassword',
          label: 'Старый пароль:',
        }),
        new InputContainer({
          className: 'password-form__input',
          type: 'password',
          name: 'newPassword',
          id: 'newPassword',
          label: 'Новый пароль:',
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        className: 'password-form__button',
        text: 'Сохранить',
      }),
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
