export const tmpl = `
    <section class="registration">
        <div class="registration__container">
            <h3 class="registration__title">Регистрация аккаунта</h3>
            <div class="registration__fields">
                <form class="registration__form form">
                    <div class="form__fields">
                        {{#each fields}}
                          {{{this}}}
                        {{/each}}
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
