# Adding Third Party GraphQL APIs as a Gatsby Data Source

Gatsby 2.0 added experimental support for schema stitching of external GraphQL APIs to its internal schema. Schema stitching allows merging multiple GraphQL schemas together, which greatly simplifies working with third-party GraphQL APIs. Along with low-level support for stitching in general, Gatsby are shipping an official `gatsby-source-graphql` plugin, which enables connecting to an arbitrary GraphQL API with just a few lines of configuration!

## Install Dependencies

First install the plugin:

```bash
yarn add gatsby-source-graphql
```

## Configure Source Plugin

Provided there is a GraphQL API under a `url`, adding it to an API just requires adding this to the config (`/gatsby-config.js`).

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SWAPI",
        // This is the field under which it's accessible
        fieldName: "swapi",
        // URL to query from
        url: "https://api.graphcms.com/simple/v1/swapi",
      },
    },
  ],
}
```

## Utilise Data Source

Third-party APIs will be available under the fieldName specified, so you can query through it normally.

```graphql
{
  # Field name parameter defines how you can access a third-party API
  swapi {
    allSpecies {
      name
    }
  }
}
```

**Note:** Types of the third-party API will be prefixed with `${typeName}_` (eg. `SWAPI_Species`). You need to prefix it too, eg. when using variables or fragments.

## How does it work?

Instead of creating nodes for all potential items in a third-party API, `gatsby-source-graphql` uses schema stitching to combine the schema of a third-party API with the Gatsby schema. Schema stitching combines multiple GraphQL schemas into one, [read more about it here](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html).

The plugin puts the full third-party GraphQL API under one field in Gatsby’s API. This way any types or fields of that API can be queried. There is no need to prefetch that data beforehand to create nodes, because the data will be fetched on-demand as required by the page queries.

## Notes

For more information on using this feature, please see the [Gatsby docs](https://www.gatsbyjs.org/docs/third-party-graphql).