import styles from './error-page.module.scss';

export const tmpl = `
  <main>
    <section class=${styles.page}>
      <h1 class=${styles.title}>{{statusCode}}</h1>
      <p class=${styles.message}>{{message}}</p>
      <div>
          {{{mainPageLink}}}
      </div>
    </section>
  </main>
`;
