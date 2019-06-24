import Typography from 'typography'

const typography = new Typography({
  bodyFontFamily: ['Roboto Condensed', 'sans-serif'],
  bodyWeight: 400,
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  headerWeight: 700,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
