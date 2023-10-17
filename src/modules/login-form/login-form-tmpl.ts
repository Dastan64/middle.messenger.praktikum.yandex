export const tmpl = `
  <div class="login-form__fields">
    {{#each inputs}}
        {{{this}}}
    {{/each}}
  </div>
  <div class="login-form__buttons">
    {{{submitButton}}}
    {{{link}}}
  </div>
`;
