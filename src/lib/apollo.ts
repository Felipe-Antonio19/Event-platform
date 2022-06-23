import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4op98i60o9s01z4ec5594ov/master',
    cache: new InMemoryCache()
})