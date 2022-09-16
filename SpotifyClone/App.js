import React, { useEffect, useState } from 'react';

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
import Home from './src/pages/main/home';
import Genrelist from './src/pages/main/search/Genrelist';
import Search from './src/pages/main/search/Search';

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
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{headerTitle: 'Sign Up!', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  )
}

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeScreen"
        component={Home}
        options={{headerTitle: 'Home', headerTitleAlign: 'center', tabBarLabel: 'Home'}}
      />
      <BottomTab.Screen
        name="SearchScreens"
        component={SearchStack}
        options={{headerShown: false, tabBarLabel: 'Search'}}
      />
      <BottomTab.Screen
        name="ProfileScreens"
        component={ProfileStack}
        options={{headerShown: false, tabBarLabel: 'Profile'}}
      />
    </BottomTab.Navigator>
  )
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{headerTitle: 'Search', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="GenreListScreen"
        component={Genrelist}
        options={{headerTitle: 'Genre Name', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{headerTitle: 'Profile', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen
        name="SettingsScreen"
        component={Settings}
        options={{headerTitle: 'Settings', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ChangeThemeScreen"
        component={ChangeTheme}
        options={{headerTitle: 'Change Theme', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfile}
        options={{headerTitle: 'Edit Profile', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
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
