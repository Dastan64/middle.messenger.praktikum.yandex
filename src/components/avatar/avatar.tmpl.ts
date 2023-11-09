import styles from './avatar.module.scss';
import avatar from '../../assets/images/avatar.png';

export const tmpl = `
  <div>
    {{#if avatar}}
      <img width="{{size}}" height="{{size}}" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Фото профиля" class=${styles.avatar}>
    {{else}}
      <img width="{{size}}" height="{{size}}" src=${avatar} alt="Фото профиля" class=${styles.avatar}>
    {{/if}}
  </div>
`;
