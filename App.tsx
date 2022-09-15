import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import CustomerScreen from './screens/CustomerScreen';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore = TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <View style={styles.container}>
      <CustomerScreen />
      <StatusBar style="auto" />
    </View>
  </TailwindProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
