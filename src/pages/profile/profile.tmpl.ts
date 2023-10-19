import styles from './profile.module.scss';

export const tmpl = `
  <section class=${styles.section}>
      <div class="wrapper">
          {{{avatar}}}

          <div class=${styles.container}>
              <div class=${styles.line}>
                  <span class=${styles.role}>Логин</span>
                  <span class=${styles.value}>@dastan64</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>E-mail</span>
                  <span class=${styles.value}>dastanz64@yandex.kz</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Имя</span>
                  <span class=${styles.value}>Дастан</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Фамилия</span>
                  <span class=${styles.value}>Жамекешев</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Имя в чате</span>
                  <span class=${styles.value}>Dastan Z</span>
              </div>

              <div class=${styles.line}>
                  <span class=${styles.role}>Телефон</span>
                  <span class=${styles.value}>+7-123-456-78-90</span>
              </div>
          </div>
          <div class=${styles.links}>
              {{{editProfileLink}}}
              {{{editPasswordLink}}}
          </div>
      </div>
  </section>
`;
