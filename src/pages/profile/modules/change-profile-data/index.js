import Handlebars from 'handlebars';
import { tmpl } from './change-profile-data.tmpl.js';
import './change-profile-data.scss';

export const ChangeProfileData = () => {
    return Handlebars.compile(tmpl)({});
};
