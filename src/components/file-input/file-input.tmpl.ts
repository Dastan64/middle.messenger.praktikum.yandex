import styles from './file-input.module.scss';

export const tmpl = `
  <label class=${styles.label}>
    <span>{{lookupOrDefault this 'label' 'Выбрать файл на компьютере'}}</span>
    <input class=${styles.input} type="file">
  </label>
`;
