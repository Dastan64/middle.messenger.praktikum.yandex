import { tmpl } from './register.tmpl.ts';
import './register.scss';

import { Link } from '../../../../components/link/index.ts';
import { Button } from '../../../../components/button/index.ts';
import Block from '../../../../core/Block.ts';

export class Register extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.mainPageLink = new Link({
      to: '/',
      text: 'На главную',
      className: 'form__link',
    });
    this.children.registerBtn = new Button({
      text: 'Зарегистрироваться',
      type: 'button',
      className: 'form__sign-up-button',
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
