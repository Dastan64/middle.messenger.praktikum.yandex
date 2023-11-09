import styles from './message.module.scss';

export const tmpl = `
  <li class=${styles.message}>
    <p class=${styles.text}>{{message.content}}</p>
    <span class=${styles.time}>{{message.time}}</span>
  </li>
`;
