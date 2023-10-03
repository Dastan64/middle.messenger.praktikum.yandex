import Handlebars from 'handlebars';
import { tmpl } from './change-password.tmpl.ts';
import './change-password.scss';

import { Button } from '../../../../components/button/index.ts';
import { Input } from '../../../../components/input/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';

import avatar from '../../../../assets/images/avatar.jpeg';
import { Field } from './types.ts';

export const ChangePassword = (): string => {
  const fields: Field[] = [
    {
      label: 'Старый пароль:',
      for: 'oldPassword',
      input: Input({
        className: 'password__input',
        type: 'password',
        name: 'oldPassword',
        id: 'oldPassword',
      }),
    },
    {
      label: 'Новый пароль:',
      for: 'newPassword',
      input: Input({
        className: 'password__input',
        type: 'password',
        name: 'newPassword',
        id: 'newPassword',
      }),
    },
  ];

  return Handlebars.compile(tmpl)({
    avatar: Avatar({ url: avatar }),
    fields,
    saveBtn: Button({
      type: 'submit',
      className: 'password__save-btn',
      text: 'Сохранить',
    }),
  });
};
