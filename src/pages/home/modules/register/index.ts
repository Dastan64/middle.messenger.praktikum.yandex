import { tmpl } from './register.tmpl.ts';
import './register.scss';
import Block from '../../../../core/Block.ts';
import { InputProps } from '../../../../components/input/types.ts';

import { Link } from '../../../../components/link/index.ts';
import { Button } from '../../../../components/button/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { RegistrationForm } from '../../../../modules/registration-form/index.ts';

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
    this.children.registrationForm = new RegistrationForm({
      className: 'registration__form registration-form',
      inputs: fields.map((field) => new InputContainer(field)),
      submitButton: new Button({
        type: 'submit',
        className: 'registration-form__sign-up-button',
        text: 'Зарегистрироваться',
      }),
      link: new Link({
        to: '/',
        text: 'На главную',
        className: 'registration-form__link',
      }),
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
