export const tmpl = `
  <div class="password-form__fields">
    {{#each inputs}}
        {{{this}}}
    {{/each}}
  </div>
  <div class='password-form__controls'>
    {{{submitButton}}}
  </div>
`;
