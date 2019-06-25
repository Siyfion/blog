import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Sidebar from './sidebar'
import Footer from './footer'

const LayoutContainer = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'auto 3fr',
  gridTemplateRows: '1fr auto',
  gridTemplateAreas: `'sidebar content' 'footer footer'`,

  '@media (max-width: 650px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `'sidebar' 'content' 'footer'`,
  },
})

const Content = styled.div({
  gridArea: 'content',
})

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            overflow-y: hidden;
            overflow-x: hidden;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
      <LayoutContainer>
        <Sidebar />
        <Content>{children}</Content>
        <Footer />
      </LayoutContainer>
    </>
  )
}

export default Layout
