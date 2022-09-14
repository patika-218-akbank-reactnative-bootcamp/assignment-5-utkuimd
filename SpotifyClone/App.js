import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './src/store/store';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SignIn from './src/pages/login/SignIn';
import SignUp from './src/pages/login/SignUp';
import Profile from './src/pages/main/profile/Profile';
import Settings from './src/pages/main/profile/Settings';
import ChangeTheme from './src/pages/main/profile/ChangeTheme';
import EditProfile from './src/pages/main/profile/EditProfile';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

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
          <Stack.Screen name="MainScreens" component={MainBottomTab} />
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

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" component={Empty} />
      <BottomTab.Screen name="SearchScreen" component={Empty} />
      <BottomTab.Screen name="ProfileScreens" component={ProfileStack} options={{headerShown: false}} />
    </BottomTab.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeTheme} />
      <Stack.Screen name="EditProfileScreen" component={EditProfile} />
    </Stack.Navigator>
  )
}

const Empty = () => {
  const user = useSelector(state => state.user);

  const showUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const isUser = userData ? userData : null;
    console.log(isUser);
  }

  const showUserInRedux = () => {
    console.log(user);
  }

  return (
    <View>
      <Text>Empty Screen!</Text>
      <Text onPress={showUser}>Show User!</Text>
      <Text onPress={showUserInRedux}>Show user in Redux!</Text>
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
