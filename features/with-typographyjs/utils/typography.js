import Typography from 'typography'

// Configure Typography.js with your required settings
// a full list of options is available here:
// https://kyleamathews.github.io/typography.js/
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],

  // NOTE: This is important to leave as FALSE unless you remove the
  // global Normalize.css import (gatsby-browser.js) and the package
  // (yarn remove normalize.css).
  includeNormalize: false,
})

export default typography
