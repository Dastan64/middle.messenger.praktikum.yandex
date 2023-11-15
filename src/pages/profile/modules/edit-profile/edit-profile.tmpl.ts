import styles from './edit-profile.module.scss';

export const tmpl = `
  <main>
    <section class=${styles.section}>
      <div class="wrapper">
        {{{avatarInput}}}
        {{{editProfileForm}}}
      </div>
    </section>
  </main>
`;
