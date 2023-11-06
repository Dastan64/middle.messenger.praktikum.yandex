import styles from './message.module.scss';

export const tmpl = `
  <li class=${styles.message}>
    <p class=${styles.text}>Друзья, у меня для вас особенный выпуск новостей!</p>
    <span class=${styles.time}>23:45</span>
  </li>
`;
