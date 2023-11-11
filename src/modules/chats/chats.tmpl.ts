import styles from './chats.module.scss';
import chat from '../../assets/images/chat.svg';

export const tmpl = `
  <main>
    <section class=${styles.section}>
        <div class=${styles.container}>
          <div class=${styles.panel}>
              {{{avatar}}}
          </div>
          <div class=${styles.sidebar}>
              <div class=${styles.searchContainer}>
                  {{{searchInput}}}
              </div>
              <div class=${styles.createChatButtonContainer}>
                {{{createChatButton}}}
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
                      {{{optionsButton}}}
                      {{#if optionsVisible}}
                        {{{options}}}
                      {{/if}}
                  </div>
                </div>
            {{/if}}
              <div class=${styles.conversation}>
                  {{#unless selectedChat}}
                    <p>Выбери чат, чтобы отправить сообщение</p>
                    <img width="120" height="120" src=${chat} alt="">
                    <p>...или создай новый</p>
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
              {{{messagesWindow}}}
                {{{messageForm}}}
              {{/if}}
          </div>
      </div>
  </section>
  </main>
`;
