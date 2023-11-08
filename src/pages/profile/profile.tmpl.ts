import styles from './profile.module.scss';

export const tmpl = `
  <main>
    <section class=${styles.section}>
      <div class="wrapper">
          {{{avatar}}}

          <div class=${styles.container}>
              <div class=${styles.line}>
                  <span class=${styles.role}>Логин</span>
                  <span class=${styles.value}>{{login}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>E-mail</span>
                  <span class=${styles.value}>{{email}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Имя</span>
                  <span class=${styles.value}>{{first_name}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Фамилия</span>
                  <span class=${styles.value}>{{second_name}}</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Имя в чате</span>
                  {{#if display_name}}
                    <span class=${styles.value}>{{display_name}}</span>
                  {{else}}
                    <span class=${styles.value}>Неопознанный единорог</span>
                  {{/if}}
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Телефон</span>
                  <span class=${styles.value}>{{phone}}</span>
              </div>
          </div>
          <div class=${styles.links}>
              {{{editProfileLink}}}
              {{{editPasswordLink}}}
          </div>
          {{{logoutButton}}}
      </div>
  </section>
  </main>
`;
