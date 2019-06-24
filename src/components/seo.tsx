/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql as gql } from 'gatsby'

import * as ApolloTypes from './__generated__/GetSiteMetadata'

interface Props {
  description?: string
  lang?: string
  meta?: {
    name: string
    content: any
    property?: any
  }
  keywords?: string[]
  title: string
}

const SEO: React.FC<Props> = ({ description = '', lang = 'en', meta = [], keywords = [], title }) => {
  const { site }: ApolloTypes.GetSiteMetadata = useStaticQuery(
    gql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  if (!site) return null
  const { siteMetadata } = site
  if (!siteMetadata) return null

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export default SEO
