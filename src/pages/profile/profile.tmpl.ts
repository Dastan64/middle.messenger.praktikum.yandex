import styles from './profile.module.scss';

export const tmpl = `
  <main>
    <section class=${styles.section}>
      <div class="wrapper">
          {{{avatar}}}

          <div class=${styles.container}>
              <div class=${styles.line}>
                  <span class=${styles.role}>ID:</span>
                  <span class=${styles.value}>{{user.id}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Логин:</span>
                  <span class=${styles.value}>{{user.login}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>E-mail:</span>
                  <span class=${styles.value}>{{user.email}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Имя:</span>
                  <span class=${styles.value}>{{user.first_name}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Фамилия</span>
                  <span class=${styles.value}>{{user.second_name}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Имя в чате:</span>
                  {{#if display_name}}
                    <span class=${styles.value}>{{user.display_name}}</span>
                  {{else}}
                    <span class=${styles.value}>Неопознанный единорог</span>
                  {{/if}}
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Телефон:</span>
                  <span class=${styles.value}>{{user.phone}}</span>
              </div>
          </div>
          <div class=${styles.links}>
                {{#each links}}
                  {{{this}}}
                {{/each}}
          </div>
          {{{logoutButton}}}
      </div>
  </section>
  </main>
`;
