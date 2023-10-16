export const tmpl = `
    <section class="login">
        <div class="login__container">
            <h3 class="login__title">Вход</h3>
            <form class="login__form form">
                <div class="form__fields">
                    {{#each inputs}}
                        {{{this}}}
                    {{/each}}
                </div>
                <div class="form__buttons">
                    {{{loginBtn}}}
                    {{{registerLink}}}
                </div>
            </form>
        </div>
    </section>
`;
