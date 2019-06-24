import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { RouteComponentProps } from '@reach/router'
import { useStaticQuery, graphql as gql } from 'gatsby'

import SEO from '../components/seo'
import { Theme } from '../styles/theme'

const BackgroundContainer = styled(BackgroundImage)({
  width: '100% !important',
  height: '100% !important',
  backgroundRepeat: 'repeat',
  backgroundSize: '1024px',
})

const HomeContainer = styled.div({
  width: '100%',
  height: '100%',
  padding: '1em 2em 1em 2em',
})

const IntroText = styled.h1(({ theme }: { theme: Theme }) => ({
  display: 'inline-block',
  padding: '.1em',
  fontSize: '4em',
  background: theme.colors.alternate,
  borderRadius: '20px',
}))

const Home: React.FC<RouteComponentProps> = () => {
  const data = useStaticQuery(gql`
    query HomePageQuery {
      file(relativePath: { eq: "stack-tiled.png" }) {
        childImageSharp {
          fixed(quality: 95, width: 1024) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <BackgroundContainer fixed={data.file.childImageSharp.fixed}>
        <HomeContainer>
          <IntroText>Hey! Welcome to my site!</IntroText>
        </HomeContainer>
      </BackgroundContainer>
    </>
  )
}

export default Home
