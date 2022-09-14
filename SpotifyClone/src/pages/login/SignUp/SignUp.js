import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../store/firebase';
import styles from './SignUp.style';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');

  const handlePostUser = () => {
    if (password === passwordAgain) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
          const user = response.user;
          console.log('Signed up was successful: ', user.email);
          setEmail('');
          setPassword('');
          setPasswordAgain('');
          setUsername('');
          navigation.navigate('SignInScreen');
        })
        .catch(error => Alert.alert(error.message));
    } else {
      Alert.alert('Passwords are not same!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create new account!</Text>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your email address"
            placeholderTextColor={'limegreen'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password"
            placeholderTextColor={'limegreen'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password again"
            placeholderTextColor={'limegreen'}
            value={passwordAgain}
            onChangeText={setPasswordAgain}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your username"
            placeholderTextColor={'limegreen'}
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </View>
      <Pressable style={styles.signUpButton} onPress={handlePostUser}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUp;