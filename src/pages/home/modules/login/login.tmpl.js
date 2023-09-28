export const tmpl = `
    <section class="login">
        <div class="login__container">
            <h3 class="login__title">Вход</h3>
            <form class="login__form form">
                <div class="form__fields">
                    <div class="form__input-container">
                        <label for="login" class="form__label">Логин:</label>
                        <input id="login" type="text" name="login" class="form__input">
                    </div>
                    <div class="form__input-container">
                        <label for="password" class="form__label">Пароль:</label>
                        <input id="password" type="password" name="password" class="form__input">
                    </div>
                </div>
                <div class="form__buttons">
                    {{{loginBtn}}}
                    {{{registerLink}}}
                </div>
            </form>
        </div>
    </section>
`;
