import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from '../Stream/Screens/WelcomeScreen'
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen'




export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
