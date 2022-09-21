import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import CustomerScreen from './screens/CustomerScreen';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore = TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer >
        <RootNavigator />
    </NavigationContainer>
  </TailwindProvider>

  );
}

