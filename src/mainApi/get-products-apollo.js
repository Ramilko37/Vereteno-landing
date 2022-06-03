import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://89.111.136.199:8080/v1/graphql",
    cache: new InMemoryCache(),
});

export default client;
