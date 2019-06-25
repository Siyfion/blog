import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { Theme } from '../styles/theme'

const FooterContainer = styled.div(({ theme }: { theme: Theme }) => ({
  gridArea: 'footer',
  backgroundColor: theme.colors.highlight,
  color: 'white',
  padding: '0.5em 1.5em',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '& > *': {
    marginBottom: 0,
    fontWeight: 700,
  },
}))

const Smallprint = styled.p({})

const CookiePolicy = styled.p({})

const CookieLink = styled(Link)({
  marginBottom: 0,
  color: 'white',
  // textDecoration: 'none',
})

const Footer: React.FC = () => (
  <FooterContainer>
    <Smallprint>&copy; Simon Mansfield 2019</Smallprint>
    <CookiePolicy>
      🍪 <CookieLink to={'/cookie_policy'}>Important statement regarding cookies</CookieLink> 🍪
    </CookiePolicy>
  </FooterContainer>
)

export default Footer
