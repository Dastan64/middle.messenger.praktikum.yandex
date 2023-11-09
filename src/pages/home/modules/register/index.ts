import { tmpl } from './register.tmpl.ts';
import Block from '../../../../core/Block.ts';
import { Link } from '../../../../components/link/index.ts';
import { Button } from '../../../../components/button/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { InputContainerProps } from '../../../../components/input-container/types.ts';
import { RegistrationForm } from '../../../../modules/registration-form/index.ts';
import { fields } from './register.fields.ts';
import { Routes } from '../../../../types/types.ts';

export class Register extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.registrationForm = new RegistrationForm({
      inputs: fields.map((field) => new InputContainer(field as InputContainerProps)),
      submitButton: new Button({
        type: 'submit',
        text: 'Зарегистрироваться',
      }),
      link: new Link({
        to: Routes.Login,
        text: 'Уже зарегистрированы?',
      }),
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
