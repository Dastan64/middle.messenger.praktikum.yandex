import styles from './edit-password.module.scss';

export const tmpl = `
  <main>
    <section class=${styles.section}>
      <div class="wrapper">
          {{{avatar}}}
          {{{editPasswordForm}}}
      </div>
    </section>
  </main>
`;
