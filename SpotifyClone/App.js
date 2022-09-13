import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/pages/login/SignIn';
import SignUp from './src/pages/login/SignUp';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreens" component={LoginStack} />
      <Stack.Screen name="MainScreens" component={MainStack} />
    </Stack.Navigator>
  )
}

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmptyScreen" component={Empty} />
    </Stack.Navigator>
  )
}

const Empty = () => {
  return (
    <View>
      <Text>Empty Screen!</Text>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
