export const tmpl = `
    <section class="data">
        {{{avatar}}}
        <input class="data__avatar-input" type="file" name="avatar">
        {{{changeAvatarButton}}}
        <form class="data__form">
            {{#each fields}}
                <div class="data__input-container">
                    <label for="{{for}}" class="data__label">{{label}}</label>
                    {{{input}}}
                </div>
            {{/each}}
            
            {{{saveBtn}}}
        </form>
    </section>
`;
