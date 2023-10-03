export const tmpl = `
    <section class="error-page">
        <h1 class="error-page__title">{{statusCode}}</h1>
        <p class="error-page__message">{{message}}</p>
        <div class="error-page__link-container">
            {{{mainPageLink}}}
        </div>
    </section>
`;
