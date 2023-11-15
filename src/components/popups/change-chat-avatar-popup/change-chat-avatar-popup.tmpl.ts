import styles from './change-chat-avatar-popup.module.scss';

export const tmpl = `
  <div class=${styles.popup}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Загрузить фото чата</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
