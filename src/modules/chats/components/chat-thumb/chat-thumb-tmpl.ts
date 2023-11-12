import styles from './chat-thumb.module.scss';
import chat from '../../../../assets/images/chat.svg';

export const tmpl = `
  <li>
    <div class=${styles.thumb}>
      <div>
      {{#if chat.avatar}}
        <img width="48" height="48" class=${styles.avatar} src="https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}" alt="">
      {{else}}
        <img width="48" height="48" class=${styles.avatar} src=${chat} alt="">
      {{/if}}
      </div>
      <div class=${styles.info}>
          <span class=${styles.name}>{{chat.title}}</span>
          <span class=${styles.message}>{{chat.last_message.content}}</span>
      </div>
      <div class=${styles.extra}>
          <span class=${styles.time}>{{chat.last_message.time}}</span>
          {{#if chat.unread_count}}
            <span class=${styles.numberOfMessages}>{{chat.unread_count}}</span>
          {{/if}}
      </div>
    </div>
  </li>
`;
