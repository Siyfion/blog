/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'

import { theme } from './src/styles/theme'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

wrapRootElement.propTypes = { element: PropTypes.any }
