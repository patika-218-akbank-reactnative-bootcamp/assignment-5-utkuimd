import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => {navigation.navigate('SignUpScreen')}}>SignIn</Text>
      <Text onPress={() => {navigation.navigate('MainScreens')}}>go to main screens!</Text>
    </View>
  );
};

export default SignIn;
