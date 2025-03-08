import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ListUsers from './components/Chat/ListUsers';
// import { enableScreens } from 'react-native-screens';
// enableScreens();


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen name="Talker" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ListUsers" component={ListUsers} />
      </Stack.Navigator>
    </SafeAreaProvider>
   
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;