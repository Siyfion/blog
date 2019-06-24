import gql from 'graphql-tag'

export const GET_USER = gql`
  query getUser {
    me {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`

export const GET_ALL_USERS = gql`
  {
    allUsers {
      id
      firstName
      lastName
      email
    }
  }
`
