import styles from './chat-thumb.module.scss';

export const tmpl = `
  <li>
    <a class=${styles.thumb} href="{{url}}">
        <div>
            <img width="48" height="48" class=${styles.avatar}
                 src="{{avatar}}"
                 alt="">
        </div>
        <div class=${styles.info}>
            <span class=${styles.name}>{{name}}</span>
            <span class=${styles.message}>{{message}}</span>
        </div>
        <div class=${styles.extra}>
            <span class=${styles.time}>{{time}}</span>
            <span class=${styles.numberOfMessages}>{{messagesNumber}}</span>
        </div>
    </a>
  </li>
`;
