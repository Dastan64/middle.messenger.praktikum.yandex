import { validate } from './validate.ts';
import Block from '../core/Block.ts';

export const validateFormSubmit = (form: HTMLFormElement, inputs: Block[], isMessage = false) => {
  const formData = new FormData(form);
  const formFields: Record<string, string> = {};

  formData.forEach((value, name) => {
    if (typeof value === 'string') {
      formFields[name] = value;
    }
  });

  const fieldsValidationErrors: Record<string, string> = validate(formFields);
  const areAllFieldsValid = Object.values(fieldsValidationErrors).every((value) => value === '');
  if (areAllFieldsValid) {
    console.log(formFields);
  } else {
    inputs.forEach((input) => {
      if (!isMessage) {
        (input.children.error as Block).setProps({
          text: input.element!.dataset.name && fieldsValidationErrors[input.element!.dataset.name],
        });
      }
    });
  }
};