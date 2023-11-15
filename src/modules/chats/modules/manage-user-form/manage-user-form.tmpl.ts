import styles from './manage-user-form.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    {{{submitButton}}}
    {{#if success}}
      <span class=${styles['success-notification']}>Успешно!</span>
    {{/if}}
  </form>
`;
