import { tmpl } from './login.tmpl.ts';

import { Button } from '../../../../components/button/index.ts';
import { Link } from '../../../../components/link/index.ts';
import Block from '../../../../core/Block.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { LoginForm } from '../../../../modules/login-form/index.ts';
import { Routes } from '../../../../types/types.ts';

export class Login extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.loginForm = new LoginForm({
      inputs: [
        new InputContainer({
          id: 'login',
          name: 'login',
          type: 'text',
          label: 'Логин:',
        }),
        new InputContainer({
          id: 'password',
          name: 'password',
          type: 'password',
          label: 'Пароль:',
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        text: 'Войти',
      }),
      link: new Link({
        to: Routes.Register,
        text: 'Зарегистрироваться',
      }),
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
