import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/client-integration-nextjs';
import { SetContextLink } from '@apollo/client/link/context';
let accessToken : string | undefined;

//harus set access token dahulu sebelum memakai apollo client ini

const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_INNGATE!}/gl`,
});

const authLink = new SetContextLink((prevContext) => {
  return {
    headers: {
      ...prevContext.headers,
      'x-header-inn-code': 'innsight',
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
    credentials: 'include',
  };
});

export const SetAccessToken = (token: string) => accessToken = token;

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink) //ApolloLink.from([errorLink, authLink, httpLink]),
    });
});
