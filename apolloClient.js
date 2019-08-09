import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory';
const GRAPHQL_ENDPOINT = `https://dingo.climber-staging.staging.c66.me/graphql`;
//const GRAPHQL_ENDPOINT = `https://api.mycaptain.co.in/graphql`;

let token
export const setToken = (newToken) => {
  if (!token) {
    token = newToken
  }
}

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT })
const middlewareAuthLink = new ApolloLink((operation, forward) => {
  // const token = JSON.parse(localStorage.getItem(AUTH_TOKEN))
  const authorizationHeader = token ? token : null
  operation.setContext({
    headers: {
      Authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

let counter = 0

export const client = new ApolloClient({          //Network interface for graphql queries
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache({
    dataIdFromObject: object => {
      return `${object.__typename}:${object.id || counter++}`
    }
  })
})