import styles from './manage-user-form.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    {{{submitButton}}}
  </form>
`;
