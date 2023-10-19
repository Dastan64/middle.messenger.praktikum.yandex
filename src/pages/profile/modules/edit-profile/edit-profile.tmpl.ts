import styles from './edit-profile.module.scss';

export const tmpl = `
    <section class=${styles.section}>
      <label class=${styles.label}>
        {{{avatar}}}
        <input class=${styles.input} type="file" name="avatar">
      </label>
      {{{editProfileForm}}}
    </section>
`;
