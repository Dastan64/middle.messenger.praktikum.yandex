import styles from './registration-form.module.scss';

export const tmpl = `
  <form>
    <div class=${styles.fields}>
      {{#each inputs}}
          {{{this}}}
      {{/each}}
    </div>
    <div class=${styles.controls}>
      {{{submitButton}}}
      {{{link}}}
    </div>
  </form>
`;
