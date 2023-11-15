import styles from './avatar-input.module.scss';

export const tmpl = `
  <div class=${styles.container}>
    {{{avatar}}}
    <label class=${styles.label}>
      <span class=${styles.caption}>Поменять фото профиля</span>
      <input class=${styles.input} type="file" name="avatar" accept="image/*">
    </label>
  </div>
`;
