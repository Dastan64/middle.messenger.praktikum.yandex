import { tmpl } from './register.tmpl.ts';
import './register.scss';

import { Link } from '../../../../components/link/index.ts';
import { Button } from '../../../../components/button/index.ts';
import Block from '../../../../core/Block.ts';
import { Input } from '../../../../components/input/index.ts';
import { InputProps } from '../../../../components/input/types.ts';

const fields: InputProps[] = [
  {
    id: 'login',
    name: 'login',
    type: 'text',
    label: 'Логин',
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'E-mail',
  },
  {
    id: 'first_name',
    name: 'first_name',
    type: 'text',
    label: 'Имя',
  },
  {
    id: 'second_name',
    name: 'second_name',
    type: 'text',
    label: 'Фамилия',
  },
  {
    id: 'phone',
    name: 'phone',
    type: 'tel',
    label: 'Номер телефона',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Пароль',
  },
  {
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    label: 'Подтвердите пароль',
  },
];

export class Register extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.fields = fields.map((field) => new Input(field));
    this.children.mainPageLink = new Link({
      to: '/',
      text: 'На главную',
      className: 'form__link',
    });
    this.children.registerBtn = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      className: 'form__sign-up-button',
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
