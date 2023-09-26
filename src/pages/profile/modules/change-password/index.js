import Handlebars from 'handlebars';
import { tmpl } from './change-password.tmpl.js';
import './change-password.scss';
import { Button } from '../../../../components/button/index.js';

export const ChangePassword = () => {
    return Handlebars.compile(tmpl)({
        saveBtn: Button({ type: 'submit', className: 'password__save-btn', text: 'Сохранить' }),
    });
};
