import { tmpl } from './login.tmpl.ts';
import './login.scss';

import { Button } from '../../../../components/button/index.ts';
import { Link } from '../../../../components/link/index.ts';
import Block from '../../../../core/Block.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';

export class Login extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.inputs = [
      new InputContainer({
        id: 'login',
        label: 'Логин',
        name: 'login',
        type: 'text',
      }),
      new InputContainer({
        id: 'password',
        label: 'Пароль',
        name: 'password',
        type: 'password',
      }),
    ];

    this.children.loginBtn = new Button({
      text: 'Войти',
      type: 'submit',
      className: 'form__sign-in-button',
    });

    this.children.registerLink = new Link({
      text: 'Зарегистрироваться',
      to: '/register',
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
