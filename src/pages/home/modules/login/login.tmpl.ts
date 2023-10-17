export const tmpl = `
    <section class="login">
        <div class="login__container">
            <h3 class="login__title">Вход</h3>
            <form class="login__form login-form">
                <div class="login-form__fields">
                    {{#each inputs}}
                        {{{this}}}
                    {{/each}}
                </div>
                <div class="login-form__buttons">
                    {{{loginBtn}}}
                    {{{registerLink}}}
                </div>
            </form>
        </div>
    </section>
`;
