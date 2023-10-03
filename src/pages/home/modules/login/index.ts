import Handlebars from 'handlebars';
import { tmpl } from './login.tmpl.ts';
import './login.scss';

import { Button } from '../../../../components/button/index.ts';
import { Link } from '../../../../components/link/index.ts';

export const Login = (): string => Handlebars.compile(tmpl)({
  loginBtn: Button({
    text: 'Войти',
    type: 'submit',
    className: 'form__sign-in-button',
  }),
  registerLink: Link({
    text: 'Зарегистрироваться',
    to: '/register',
  }),
});
