export const tmpl = `
  <div class="profile-form__fields">
    {{#each inputs}}
        {{{this}}}
    {{/each}}
  </div>
  <div class='profile-form__controls'>
    {{{submitButton}}}
  </div>
`;
