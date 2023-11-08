import styles from './add-user-popup.module.scss';

export const tmpl = `
  <div class=${styles.popup}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Добавить пользователя</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
