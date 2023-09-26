export const tmpl = `
    <section class="password">
        <div class="password__avatar-container">
            <img class="avatar" width="130" height="130" src="https://w.forfun.com/fetch/11/11a048e1dc27122485346049cd6d7c4f.jpeg" alt="">
        </div>
        <h3>Дастан Жамекешев</h3>
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
`
