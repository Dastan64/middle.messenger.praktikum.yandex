import styles from './input.module.scss';

export const tmpl = `
  <input class=${styles.input} type="{{type}}" id="{{id}}" name="{{name}}"
  value="{{lookupOrDefault this 'value' ''}}" placeholder="{{lookupOrDefault this 'placeholder' ''}}"/>
`;
