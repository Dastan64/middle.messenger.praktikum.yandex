export const tmpl = `
  <section class="home">
    <h1 class="home__title">Привет, добро пожаловать в чат!</h1>
    <nav class="home__nav">
        <ul class="home__list">
            {{#each links}}
                <li>{{{this}}}</li>
            {{/each}}
        </ul>
    </nav>
  </section>
`;
