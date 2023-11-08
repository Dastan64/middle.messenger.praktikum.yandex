import styles from './delete-user-form.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    {{#each inputs}}
        {{{this}}}
    {{/each}}
    {{{submitButton}}}
  </form>
`;
