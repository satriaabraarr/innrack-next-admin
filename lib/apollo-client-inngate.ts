'use client';

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';


const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_INNGATE!}/gl`,
    credentials: 'include',
    headers: {
        'x-header-inn-code': 'innsight',
    }
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink //ApolloLink.from([errorLink, authLink, httpLink]),
});
