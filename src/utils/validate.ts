interface ErrorsObject {
  [key: string]: string;
}

interface validateParams {
  [key: string]: string;
}

enum NAMES {
  CONFIRM_PASSWORD = 'confirm-password',
  DISPLAY_NAME = 'display_name',
  EMAIL = 'email',
  FIRST_NAME = 'first_name',
  LOGIN = 'login',
  MESSAGE = 'message',
  NEW_CHAT = 'new-chat',
  NEW_PASSWORD = 'newPassword',
  OLD_PASSWORD = 'oldPassword',
  PASSWORD = 'password',
  PHONE = 'phone',
  SECOND_NAME = 'second_name',
  USER_ID = 'user-id',
}

const validateLogin = (value: string) => {
  const pattern = /^(?!-|_)(?!.*(?:-|_){2})[A-Za-z0-9_-]{3,20}$/;
  if (!pattern.test(value)) {
    return 'Некорректный логин';
  }
  return '';
};

const validateEmail = (value: string) => {
  // eslint-disable-next-line max-len
  const pattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  if (!pattern.test(value)) {
    return 'Некорректный e-mail';
  }
  return '';
};

const validateName = (value: string) => {
  const startsWithTheCapitalLetter = /^[A-ZА-ЯЁ].*$/;
  const noSymbols = /^[^-!@#$%^&*()_+=;:,./?\\|`~[\]{}0-9\s]+$/;
  if (!startsWithTheCapitalLetter.test(value)) {
    return 'Должно начинаться с заглавной буквы';
  }
  if (!noSymbols.test(value)) {
    return 'Есть недопустимые символы';
  }
  return '';
};

const validatePhone = (value: string) => {
  const pattern = /^\+?\d{10,15}$/;
  if (!pattern.test(value)) {
    return 'Некорректный номер телефона';
  }
  return '';
};

const validatePassword = (value: string) => {
  const pattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
  if (!pattern.test(value)) {
    return 'Некорректный формат пароля';
  }
  return '';
};

const validateMessage = (value: string) => {
  const hasOnlySpacesPattern = /^\s*$/;
  if (value.length === 0 || hasOnlySpacesPattern.test(value)) {
    return 'Сообщение не может быть пустым';
  }
  return '';
};

export const validate = (input: validateParams) => {
  const errors: ErrorsObject = {};
  Object.entries(input).forEach(([name, value]) => {
    switch (name) {
      case NAMES.LOGIN:
        errors[name] = validateLogin(value);
        break;
      case NAMES.EMAIL:
        errors[name] = validateEmail(value);
        break;
      case NAMES.FIRST_NAME:
      case NAMES.SECOND_NAME:
        errors[name] = validateName(value);
        break;
      case NAMES.PASSWORD:
        errors[name] = validatePassword(value);
        break;
      case NAMES.CONFIRM_PASSWORD:
        if (input[NAMES.PASSWORD]) {
          if (value !== input[NAMES.PASSWORD]) {
            errors[name] = 'Пароли не совпадают';
          }
        }
        break;
      case NAMES.OLD_PASSWORD:
        if (value.length === 0) {
          errors[name] = 'Пустое поле';
        }
        break;
      case NAMES.NEW_PASSWORD:
        if (value.length === 0) {
          errors[name] = 'Пустое поле';
        } else if (value === input[NAMES.OLD_PASSWORD]) {
          errors[name] = 'Новый пароль не может быть старым паролем';
        }
        break;
      case NAMES.PHONE:
        errors[name] = validatePhone(value);
        break;
      case NAMES.MESSAGE:
        errors[name] = validateMessage(value);
        break;
      case NAMES.DISPLAY_NAME:
        if (value.length === 0) {
          errors[name] = 'Имя в чате не может быть пустым';
        }
        break;
      case NAMES.NEW_CHAT:
        if (value.length === 0) {
          errors[name] = 'Название чата не может быть пустым';
        }
        break;
      case NAMES.USER_ID:
        if (value.length === 0) {
          errors[name] = 'ID пользователя не может быть пустым';
        }
        break;
      default:
        break;
    }
  });
  return errors;
};
