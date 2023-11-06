import styles from './chats.module.scss';
import chat from '../../assets/images/chat.svg';

export const tmpl = `
  <main>
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
              <!--<div class=${styles.top}>
                  <div class=${styles.topInfo}>
                      <span class=${styles.talkerName}>Даниил</span>
                      <span class=${styles.status}>Был в сети 6 минут назад</span>
                      <button class=${styles.settingsBtn}></button>
                  </div>
              </div>-->
              <div class=${styles.conversation}>
                  <p>Выбери чат, чтобы отправить сообщение</p>
                  <img width="120" height="120" src=${chat} alt="">
                  <p>...или создай новый</p>
                  {{{button}}}
                  {{#if isCreateChatPopupOpen}}
                    {{{popup}}}
                  {{/if}}
              </div>
<!--              {{{form}}}-->
          </div>
      </div>
  </section>
  </main>
`;
