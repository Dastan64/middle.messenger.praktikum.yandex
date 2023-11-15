import styles from './create-chat-form.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    {{#each inputs}}
        {{{this}}}
    {{/each}}
    {{{submitButton}}}
  </form>
`;
