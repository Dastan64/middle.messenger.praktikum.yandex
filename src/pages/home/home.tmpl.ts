import styles from './home.module.scss';

export const tmpl = `
  <main>
    <section class=${styles.home}>
      <h1 class=${styles.title}>Привет, добро пожаловать в чат!</h1>
      <nav>
          <ul class=${styles.list}>
              {{#each links}}
                  <li>{{{this}}}</li>
              {{/each}}
          </ul>
      </nav>
    </section>
  </main>
`;
