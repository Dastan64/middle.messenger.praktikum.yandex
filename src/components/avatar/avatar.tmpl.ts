import styles from './avatar.module.scss';

export const tmpl = `
  <div>
      <img width="130" height="130" src="{{url}}" alt="Фото профиля" class=${styles.avatar}>
  </div>
  <span class=${styles.name}>{{username}}</span>
`;
