import Handlebars from 'handlebars';
import { tmpl } from './change-profile-data.tmpl.js';
import './change-profile-data.scss';
import { Button } from '../../../../components/button/index.js';

export const ChangeProfileData = () => {
    return Handlebars.compile(tmpl)({
        saveBtn: Button({ type: 'submit', className: 'data__save-btn', text: 'Сохранить' }),
    });
};
