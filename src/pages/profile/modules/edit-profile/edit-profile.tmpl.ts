import styles from './edit-profile.module.scss';

export const tmpl = `
    <section class=${styles.section}>
      <div class="wrapper">
        {{{avatarInput}}}
        {{{editProfileForm}}}
      </div>
    </section>
`;
