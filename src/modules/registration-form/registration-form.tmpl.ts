export const tmpl = `
  <div class="registration-form__fields">
    {{#each inputs}}
        {{{this}}}
    {{/each}}
  </div>
  <div class='registration-form__controls'>
    {{{submitButton}}}
    {{{link}}}
  </div>
`;
