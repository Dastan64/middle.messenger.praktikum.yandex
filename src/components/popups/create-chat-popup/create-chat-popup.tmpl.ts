import styles from './create-chat-popup.module.scss';

export const tmpl = `
  <div class=${styles.popup}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Создать чат</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
