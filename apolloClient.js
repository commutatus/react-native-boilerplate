import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { store } from "redux-local/store";

const GRAPHQL_ENDPOINT = `ENTER YOUR GRAPHQL ENDPOINT HERE. DON'T FORGET TO ADD /graphql TO THE END OF THE URL.`;

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });
const middlewareAuthLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: store.getState()?.token,
      "User-Agent": store.getState()?.userAgent || "customUserAgent",
    },
  });
  return forward(operation);
});

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);

let counter = 0;

export const client = new ApolloClient({
  //Network interface for graphql queries
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache({
    dataIdFromObject: (object) => {
      return `${object.__typename}:${object.id || counter++}`;
    },
  }),
});
