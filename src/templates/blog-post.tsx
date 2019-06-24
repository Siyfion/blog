import React from 'react'
import { graphql as gql } from 'gatsby'

import SEO from '../components/seo'
import * as ApolloTypes from './__generated__/BlogPostBySlug'

interface Props {
  data: ApolloTypes.BlogPostBySlug
}

const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const post = data.markdownRemark
  if (!post || !post.html) return null
  return (
    <>
      {!post.frontmatter ? null : (
        <SEO
          title={post.frontmatter.title || 'NO TITLE SPECIFIED'}
          description={post.frontmatter.description || post.excerpt || undefined}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = gql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
