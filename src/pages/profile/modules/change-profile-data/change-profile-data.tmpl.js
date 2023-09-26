export const tmpl = `
    <section class="data">
        <div class="data__avatar-container">
            <img class="avatar" width="130" height="130" src="https://w.forfun.com/fetch/11/11a048e1dc27122485346049cd6d7c4f.jpeg" alt="">
        </div>
        <h3>Дастан Жамекешев</h3>
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
`
