import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../store/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/store';
import styles from './SignIn.style';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGetUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      const user = response.user;
      const userNeededData = {
        email: user.email,
        username: user.displayName,
        photoURL: user.photoURL
      };
      AsyncStorage.setItem('user', JSON.stringify(userNeededData));
      dispatch(setUser(JSON.stringify(userNeededData)));
      setEmail('');
      setPassword('');
    })
    .catch(error => Alert.alert(error.message));
  };

  const gotoSignIn = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={styles.welcomeText}>Welcome to Spotify Clone App!</Text>
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
      <Text onPress={gotoSignIn} style={styles.gotoSignIn}>
        Don't you have any account? Create one!
      </Text>
      <Pressable style={styles.signInButton} onPress={handleGetUser}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignIn;
