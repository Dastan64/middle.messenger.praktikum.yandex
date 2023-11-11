import Handlebars from 'handlebars';

Handlebars.registerHelper('lookupOrDefault', (object, propertyName, defaultValue, options) => {
  const result = options.lookupProperty(object, propertyName);
  if (result === undefined) {
    return defaultValue;
  }
  return result;
});
