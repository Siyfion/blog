# Progressive Images

The app, by default, includes the `gatsby-image` to handle image optimization.

**Note:** The "blur" effect (and styling generally) for the placeholder image is adjustable by setting the `placeholderStyle` object to an appropriate value (see below). This way, different blur effects may be applied to different images, though it may be worth creating a "default" styled `Img` component, if the same blur effect is likely to be use everywhere.

An example of a local file is included `pages/index.js`. Reproduced below:

``` javascript

import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Layout } from '../components/layout/Layout'

const propTypes = {
  data: PropTypes.any
}

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Welcome to the Starter Kit!!!</h1>
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="a progressive image"
      placeholderStyle={{
        filter: 'blur(5px)',
      }}
    />
    <Link to="/page-two/">Go to Page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "BernieSanders.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

IndexPage.propTypes = propTypes

export default IndexPage

```

However, if your images are from another source (such as Prismic, Contentful, or some pther API), you should refer to the appropriate [Gatsby Plugin](https://www.gatsbyjs.org/plugins/) documentation.
