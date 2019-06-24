# Adding Apollo Client to the Starter Kit

## Installation

To get started with Apollo, you can either install a few packages from npm or use the `apollo-boost` package, which bundles the _core_ packages together as a quick-start. In this example we'll be installing the individual packages, as don't recommend using `apollo-boost` for anything other than a ultra-simplistic example.

```bash
yarn add apollo-client apollo-cache-inmemory apollo-link-http react-apollo graphql-tag isomorphic-fetch
```

**Note:** Do _not_ add the `graphql` package as you might normally; Gatsby already has this library as a dependency and it's important that the version isn't changed from the version that it expects.

## Directory Structure

Copy the `GraphQL` folder into the root `src` folder. This is where the GraphQL client initialisation code will reside, as well as any shared GraphQL Queries, Fragments, etc.

## Create an ApolloClient

Open the newly created `src/GraphQL/client.js` file and ensure that the `uri` is set to the GraphQL API endpoint.

## Connect the ApolloClient to your React component tree

It is recommended that you inject the `ApolloProvider` component into your application at the highest level you can; for this reason we recommend making the following change to `gatsby-browser.js` in the root of your project:

```js
import React from "react"
import { ApolloProvider } from "react-apollo"

import { client } from "./src/GraphQL/client"

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}
```

## Query for some data

In any page / component, simply query for data as you normally would. For example, here is a version of the `src/index.js` page with a dynamic GraphQL query:

```js
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { Layout } from '../components/layout/Layout'


const GET_ALL_USERS = gql`
{
  allUsers {
    id
    firstName
    lastName
    email
  }
}
`;

const IndexPage = () => (
  <Layout>
    <Query query={GET_ALL_USERS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <ul>
            {data.allUsers.map(user => (
              <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
            ))}
          </ul>
        )
      }}
    </Query>
  </Layout>
)

export default IndexPage
```
