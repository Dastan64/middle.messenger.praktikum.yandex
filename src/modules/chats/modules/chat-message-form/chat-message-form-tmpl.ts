export const tmpl = `
  <label class="file-input-label" for="file"></label>
  {{#each inputs}}
    {{{this}}}
  {{/each}}
  <button class="send-btn" type="submit"></button>
`;
