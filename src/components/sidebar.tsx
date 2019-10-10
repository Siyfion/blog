import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { Theme } from '../styles/theme'
import TwitterLogo from '../../content/assets/social_icons/twitter.inline.svg'
import InstaLogo from '../../content/assets/social_icons/instagram.inline.svg'

const SidebarContainer = styled.div(({ theme }: { theme: Theme }) => ({
  gridArea: 'sidebar',
  backgroundColor: theme.colors.secondary,
  color: 'white',
  padding: '1em 2em 1em 2em',

  '@media (max-width: 650px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Logo = styled.h1({
  fontFamily: 'Satisfy, cursive',
  fontSize: '7em',
  margin: '0 0 3rem 0',
  color: 'white',
})

const ShowNavButton = styled.button({
  visibility: 'hidden',
  '@media (max-width: 650px)': {
    visibility: 'visible',
  },
})

const NavContainer = styled.nav({}, (props: { show: boolean }) => ({
  '@media (max-width: 650px)': {
    display: props.show ? 'block' : 'none',
  },
}))

const NavLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  backgroundImage: `
    linear-gradient(
      transparent 2px,
      ${theme.colors.primary} 2px,
      ${theme.colors.primary} 4px,
      transparent 4px
    ),
    linear-gradient(
      transparent 2px,
      ${theme.colors.mellow} 2px,
      ${theme.colors.mellow} 4px,
      transparent 4px
    )`,
  backgroundPosition: '0 bottom, 0 bottom',
  backgroundSize: '0% 6px, 100% 6px',
  backgroundRepeat: 'no-repeat',
  paddingBottom: '4px',
  transition: 'background-size 0.3s ease-in-out, color 0.3s ease-in-out',
  textDecoration: 'none',
  width: 'max-content',
  ':hover': {
    backgroundSize: '100% 6px',
    color: theme.colors.primary,
  },
  display: 'flex',
  flexDirection: 'column',
  margin: '0 0 2em',
  color: 'white',
}))
const NavTitle = styled.span({
  fontWeight: 700,
  fontSize: '1.25em',
})
const NavLabel = styled.span({
  fontSize: '0.8em',
})

const SocialContainer = styled.div({
  display: 'flex',
})
const SocialLink = styled.a({
  textDecoration: 'none',
  height: '2rem',
  width: '2rem',
  display: 'block',
  '> svg': {
    display: 'block',
    height: '100%',
    width: '100%',
  },
})

const Sidebar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <SidebarContainer>
      <Logo>Simon</Logo>
      <ShowNavButton onClick={() => setShowMenu(!showMenu)}>Show Menu</ShowNavButton>
      <NavContainer show={showMenu}>
        <NavLink to={'/'}>
          <NavTitle>Home</NavTitle>
          <NavLabel>Go back from whence you came!</NavLabel>
        </NavLink>
        <NavLink activeClassName="current-page" to={'/about'}>
          <NavTitle>About</NavTitle>
          <NavLabel>What is it that I do again...?</NavLabel>
        </NavLink>
        <NavLink activeClassName="current-page" to={'/history'}>
          <NavTitle>History</NavTitle>
          <NavLabel>A timeline of me</NavLabel>
        </NavLink>
        <NavLink activeClassName="current-page" to={'/blog'}>
          <NavTitle>Blog</NavTitle>
          <NavLabel>Read interesting (hopefully) stuff!</NavLabel>
        </NavLink>
        <NavLink activeClassName="current-page" to={'/contact'}>
          <NavTitle>Contact</NavTitle>
          <NavLabel>Get in touch</NavLabel>
        </NavLink>
      </NavContainer>
      <SocialContainer>
        <SocialLink href="https://twitter.com/Siyfion">
          <TwitterLogo />
        </SocialLink>
        <SocialLink href="">
          <InstaLogo />
        </SocialLink>
      </SocialContainer>
    </SidebarContainer>
  )
}

export default Sidebar
