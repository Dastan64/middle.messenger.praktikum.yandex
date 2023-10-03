import Handlebars from 'handlebars';
import { tmpl } from './register.tmpl.ts';
import './register.scss';

import { Link } from '../../../../components/link/index.ts';
import { Button } from '../../../../components/button/index.ts';

export const Register = (): string => Handlebars.compile(tmpl)({
  mainPageLink: Link({
    to: '/',
    text: 'На главную',
    className: 'form__link',
  }),
  registerBtn: Button({
    text: 'Зарегистрироваться',
    type: 'button',
    className: 'form__sign-up-button',
  }),
});
