// lib/apolloServer.ts
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/client-integration-nextjs';

const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_SERVER!}/gl`,
    credentials: 'include',
    headers: {
        'x-header-inn-code': 'innsight',
    }
});

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink //ApolloLink.from([errorLink, authLink, httpLink]),
    });
});
