import styles from './input-container.module.scss';

export const tmpl = `
  <div class=${styles.container} data-name="{{name}}">
    <label class=${styles.label} for="{{id}}">{{label}}</label>
    {{{input}}}
    {{{error}}}
  </div>
`;
