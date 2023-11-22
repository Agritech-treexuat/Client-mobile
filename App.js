import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen'
import ItemScreen from './screens/ItemScreen'
import BottomMenuNavigation from './components/BottomMenuNavigation';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page" component={BottomMenuNavigation} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
