import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/api/graphql", // ⬅️ proxy endpoint
    credentials: "include", // ⬅️ agar cookie dikirim
  }),
  cache: new InMemoryCache(),
});

export default client;
