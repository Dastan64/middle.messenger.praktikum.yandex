import styles from './delete-user-popup.module.scss';

export const tmpl = `
  <div class=${styles.popup}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Удалить пользователя</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
