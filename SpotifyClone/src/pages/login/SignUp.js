import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => {navigation.navigate('SignInScreen')}}>SignUp</Text>
    </View>
  );
};

export default SignUp;
