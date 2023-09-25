export const tmpl = `
    <section class="registration">
        <div class="registration__container">
            <h3 class="registration__title">Регистрация аккаунта</h3>
            <div class="registration__fields">
                <form class="registration__form form">
                    <div class="form__fields">
                        <div class="form__input-container">
                            <label for="login" class="form__label">Логин:</label>
                            <input id="login" type="text" name="login" class="form__input">
                        </div>
    
                        <div class="form__input-container">
                            <label for="email" class="form__label">E-mail:</label>
                            <input id="email" type="text" name="email" class="form__input">
                        </div>
    
                        <div class="form__input-container">
                            <label for="first_name" class="form__label">Имя:</label>
                            <input id="first_name" type="text" name="first_name" class="form__input">
                        </div>
    
                        <div class="form__input-container">
                            <label for="second_name" class="form__label">Фамилия:</label>
                            <input id="second_name" type="text" name="second_name" class="form__input">
                        </div>
    
                        <div class="form__input-container">
                            <label for="phone" class="form__label">Номер телефона:</label>
                            <input id="phone" type="text" name="phone" class="form__input">
                        </div>
    
                        <div class="form__input-container">
                            <label for="password" class="form__label">Пароль:</label>
                            <input id="password" type="password" name="password" class="form__input">
                        </div>
    
                        <div class="form__input-container">
                            <label for="confirm-password" class="form__label">Подтвердите пароль:</label>
                            <input id="confirm-password" type="password" name="confirm-password"
                                   class="form__input">
                        </div>
    
                    </div>
                    <div class="form__buttons">
                        {{{registerBtn}}}
                        {{{mainPageLink}}}
                    </div>
                </form>
            </div>
        </div>
    </section>
`;
