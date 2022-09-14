import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './src/store/store';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SignIn from './src/pages/login/SignIn';
import SignUp from './src/pages/login/SignUp';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const isUser = userData ? userData : null;
    dispatch(setUser(isUser))
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        user.user ? (
          <Stack.Screen name="MainScreens" component={MainStack} />
        ) : (
          <Stack.Screen name="LoginScreens" component={LoginStack} />
        )
      }      
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
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    dispatch(setUser(null));
  }

  const showUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const isUser = userData ? userData : null;
    console.log(isUser);
  }

  const showUserInRedux = () => {
    console.log(user);
    return (
      <View>
        <Text>{JSON.parse(user.user).email}</Text>
        <Text>{JSON.parse(user.user).username}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Empty Screen!</Text>
      <Text onPress={logout}>Logout!</Text>
      <Text onPress={showUser}>Show User!</Text>
      <Text onPress={showUserInRedux}>Show user in Redux!</Text>
      {showUserInRedux()}
    </View>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
