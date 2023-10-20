import styles from './edit-profile.module.scss';

export const tmpl = `
    <section class=${styles.section}>
      <div class="wrapper">
        <label class=${styles.label}>
          {{{avatar}}}
          <input class=${styles.input} type="file" name="avatar">
        </label>
        {{{editProfileForm}}}
      </div>
    </section>
`;
