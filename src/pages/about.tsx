import React from 'react'
import styled from '@emotion/styled'
import { RouteComponentProps } from '@reach/router'

import SEO from '../components/seo'

const About: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <SEO title="About" />
      <p>ABOUT</p>
    </>
  )
}

export default About
