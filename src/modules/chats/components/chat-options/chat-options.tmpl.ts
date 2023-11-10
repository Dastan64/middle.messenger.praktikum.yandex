import styles from './chat-options.module.scss';

export const tmpl = `
  <div class=${styles.options}>
    {{#each buttons}}
      {{{this}}}
    {{/each}}
  </div>
`;
