import fetch from 'isomorphic-fetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://fakerql.com/graphql',
  }),
  cache: new InMemoryCache(),
})

export { client }
