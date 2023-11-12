import styles from './chats.module.scss';
import chat from '../../assets/images/chat.svg';

export const tmpl = `
  <main>
    <section class=${styles.section}>
        <div class=${styles.container}>
          <div class=${styles.panel}>
              {{{avatarLink}}}
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

            {{#unless selectedChat}}
              <div class=${styles.instruction}>
              <p>Выбери чат, чтобы отправить сообщение</p>
              <img width="120" height="120" src=${chat} alt="">
              <p>...или создай новый</p>
          </div>
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

            {{#if isChatAvatarPopupOpen}}
              {{{changeChatAvatarPopup}}}
            {{/if}}

            {{#if selectedChat}}
              {{{messagesWindow}}}
              {{{messageForm}}}
            {{/if}}
          </div>
      </div>
  </section>
  </main>
`;
