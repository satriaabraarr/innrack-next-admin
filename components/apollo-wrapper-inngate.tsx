'use client';

import { ApolloProvider } from '@apollo/client/react';
import { client } from '@/lib/apollo-client-inngate';

export function ApolloWrapperInnGate({ children }: { children: React.ReactNode })
{

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
