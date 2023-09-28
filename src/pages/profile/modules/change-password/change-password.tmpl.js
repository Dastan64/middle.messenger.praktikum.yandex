export const tmpl = `
    <section class="password">
        {{{avatar}}}
        <form class="password__form">
            {{#each fields}}
                <div class="password__input-container">
                    <label for="{{for}}" class="password__label">{{label}}</label>
                    {{{input}}}
                </div>
            {{/each}}
            {{{saveBtn}}}
        </form>
    </section>
`;
