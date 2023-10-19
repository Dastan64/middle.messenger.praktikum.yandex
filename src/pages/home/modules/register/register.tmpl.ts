import styles from './register.module.scss';

export const tmpl = `
  <section class=${styles.registration}>
      <div class=${styles.container}>
          <h2 class=${styles.title}>Регистрация аккаунта</h2>
          {{{registrationForm}}}
      </div>
  </section>
`;
