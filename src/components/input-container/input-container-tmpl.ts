import styles from './input-container.module.scss';

export const tmpl = `
  <label class=${styles.label} for="{{id}}">{{label}}</label>
  {{{input}}}
  {{{error}}}
`;
