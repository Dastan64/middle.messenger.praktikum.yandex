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
            {{#if selectedChat}}
                <div class=${styles.top}>
                  <div class=${styles.topInfo}>
                      <span class=${styles.talkerName}>{{selectedChat.title}}</span>
                      <span class=${styles.status}>В сети</span>
                      <button class=${styles.settingsBtn}></button>
                      <div class=${styles.options}>
                        {{{addUserButton}}}
                        {{{deleteUserButton}}}
                      </div>
                  </div>
                </div>
            {{/if}}
              <div class=${styles.conversation}>
                  {{#unless selectedChat}}
                    <p>Выбери чат, чтобы отправить сообщение</p>
                    <img width="120" height="120" src=${chat} alt="">
                    <p>...или создай новый</p>
                    {{{createChatButton}}}
                  {{/unless}}

                  {{#if isCreateChatPopupOpen}}
                    {{{createChatPopup}}}
                  {{/if}}

                  {{#if isAddUserPopupOpen}}
                    {{{addUserPopup}}}
                  {{/if}}

                  {{#if isDeleteUserPopupOpen}}
                    {{{deleteUserPopup}}}
                  {{/if}}
              </div>
              {{#if selectedChat}}
                {{{form}}}
              {{/if}}
          </div>
      </div>
  </section>
  </main>
`;
