import styles from './messages-window.module.scss';

export const tmpl = `
  <div>
    <ul class=${styles['messages-list']}>
      {{#each messages}}
        {{{this}}}
      {{/each}}
    </ul>
  </div>
`;
