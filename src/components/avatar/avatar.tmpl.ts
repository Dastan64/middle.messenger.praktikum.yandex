import styles from './avatar.module.scss';

export const tmpl = `
  <div>
    <div>
      <img width="130" height="130" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Фото профиля" class=${styles.avatar}>
    </div>
    <span class=${styles.name}>{{first_name}} {{second_name}}</span>
  </div>
`;
