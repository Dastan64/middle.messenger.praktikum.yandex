import { tmpl } from './login.tmpl.ts';
import './login.scss';

import { Button } from '../../../../components/button/index.ts';
import { Link } from '../../../../components/link/index.ts';
import Block from '../../../../core/Block.ts';
import { Input } from '../../../../components/input/index.ts';

export class Login extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.fields = [
      new Input({
        id: 'login',
        name: 'login',
        type: 'text',
        label: 'Логин',
      }),
      new Input({
        id: 'password',
        name: 'password',
        type: 'password',
        label: 'Пароль',
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
    return this.compile(tmpl, {});
  }
}
