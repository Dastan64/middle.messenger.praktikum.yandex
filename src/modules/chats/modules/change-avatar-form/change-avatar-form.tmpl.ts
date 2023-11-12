import styles from './change-avatar-form.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    {{{submitButton}}}
  </form>
`;
