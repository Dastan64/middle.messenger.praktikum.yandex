import styles from './chat-message-form.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    <label class=${styles.label} for="file"></label>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    <button class=${styles.button} type="submit"></button>
  </form>
`;
