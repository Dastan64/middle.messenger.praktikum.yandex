import styles from './avatar.module.scss';
import avatar from '../../assets/images/avatar.png';

export const tmpl = `
  <div>
    <div>
      {{#if avatar}}
        <img width="130" height="130" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Фото профиля" class=${styles.avatar}>
      {{else}}
        <img width="130" height="130" src=${avatar} alt="Фото профиля" class=${styles.avatar}>
      {{/if}}
    </div>
    <span class=${styles.name}>{{first_name}} {{second_name}}</span>
  </div>
`;
