export const tmpl = `
    <section class="password">
        {{{avatar}}}
        <form class="password__form">
            {{#each fields}}
                {{{this}}}
            {{/each}}
            {{{saveBtn}}}
        </form>
    </section>
`;
