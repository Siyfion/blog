/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

import Layout from './src/components/layout'
import { theme } from './src/styles/theme'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

wrapRootElement.propTypes = { element: PropTypes.any }
