import { tmpl } from './edit-password.tmpl.ts';

import { Button } from '../../../../components/button/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { EditPasswordForm } from '../../../../modules/edit-password-form/index.ts';
import Block from '../../../../core/Block.ts';

export class ChangePassword extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.avatar = new Avatar({
      size: '130',
    });

    this.children.editPasswordForm = new EditPasswordForm({
      inputs: [
        new InputContainer({
          type: 'password',
          name: 'oldPassword',
          id: 'oldPassword',
          label: 'Старый пароль:',
          isOutlined: true,
        }),
        new InputContainer({
          type: 'password',
          name: 'newPassword',
          id: 'newPassword',
          label: 'Новый пароль:',
          isOutlined: true,
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        text: 'Сохранить',
      }),
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
