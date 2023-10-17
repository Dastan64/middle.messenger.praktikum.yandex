import './registration-form.scss';
import Block from '../../core/Block.ts';
import { tmpl } from './registration-form.tmpl.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';

interface FormProps {
  className?: string;
  inputs: Block[];
  link: Block;
  submitButton: Block;
}

export class RegistrationForm extends Block {
  constructor(props: FormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
        },
      },
    });
  }

  init() {
    const element = this.element as HTMLFormElement;
    element.className = this.props.className;
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
