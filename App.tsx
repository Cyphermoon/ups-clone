import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './app/navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://braganca.stepzen.net/api/harping-gorilla/__graphql',
});

const authLink = setContext((_, { headers }) => {
  console.log("auth key", process.env.NEXT_PUBLIC_STEPZEN_API_KEY)

  return {
    headers: {
      ...headers,
      Authorization: "apikey " + process.env.NEXT_PUBLIC_STEPZEN_API_KEY
    }
  }
})


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>

  );
}
