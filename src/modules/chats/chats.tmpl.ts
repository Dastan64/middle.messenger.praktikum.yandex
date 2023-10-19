import styles from './chats.module.scss';

export const tmpl = `
  <section class=${styles.section}>
        <div class=${styles.container}>
        <div class=${styles.panel}>
            <img width="48" height="48"
                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg" alt=""
                 class=${styles.avatar}>
        </div>
        <div class=${styles.sidebar}>
            <div class=${styles.searchContainer}>
                {{{input}}}
            </div>
            <ul class=${styles.chats}>
              {{#each chats}}
                  {{{this}}}
              {{/each}}
            </ul>
        </div>
        <div class=${styles.current}>
            <div class=${styles.top}>
                <div class=${styles.topInfo}>
                    <span class=${styles.talkerName}>Даниил</span>
                    <span class=${styles.status}>Был в сети 6 минут назад</span>
                    <button class=${styles.settingsBtn}></button>
                </div>
            </div>
            <div class=${styles.conversation}>
                <ul class=${styles.messages}>
                  {{#each messages}}
                    {{{this}}}
                  {{/each}}
                </ul>
            </div>
            {{{form}}}
        </div>
      </div>
  </section>
`;
