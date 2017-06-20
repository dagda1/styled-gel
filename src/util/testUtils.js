export const stripComments = str =>
  str.replace(/\/\*.*?\*\/\n?/g, '')

export const stripWhitespace = str =>
  str.trim().replace(/([;{}])/g, '$1  ').replace(/\s+/g, ' ')

export const getCSSFromDom = () =>
  Array.from(document.querySelectorAll('style'))
      .map(tag => tag.innerHTML)
      .join('\n')
      .replace(/ {/g, '{')
      .replace(/:\s+;/g, ':;')
      .split(';')
      .map(stripComments)
      .map(stripWhitespace)
      .filter(x => x.trim('').length);
