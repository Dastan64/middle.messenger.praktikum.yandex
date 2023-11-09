import { tmpl } from './messages-window.tmpl.ts';
import Block from '../../../../core/Block.ts';
import { MessagesWindowProps } from './types.ts';
import { Message } from '../message/index.ts';
import { MessageData } from '../../../../types/types.ts';
import { withStore } from '../../../../hocs/withStore.ts';
import { State } from '../../../../core/Store.ts';
import { formatTime } from '../../../../utils/formatTime.ts';

export class BaseMessagesWindow extends Block {
  constructor(props: MessagesWindowProps) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.messages) {
      this.children.messages = this.props.messages
        .map((message: MessageData) => ({
          ...message,
          sent: message.user_id === this.props.userId,
          time: formatTime(message.time),
        }))
        .map((message: MessageData) => new Message({ message }));
    }
    return true;
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => ({
  messages: state.currentMessages,
  userId: state.user?.id,
});

export const MessagesWindow = withStore(mapStateToProps)(BaseMessagesWindow);
