import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../../store/store';
import { useNavigation } from '@react-navigation/native';
import styles from './EditProfile.style';

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.theme);

  const saveChanges = async () => {
    const newUserData = {
      email,
      username,
      photoURL,
    };
    await AsyncStorage.setItem('user', JSON.stringify(newUserData));
    dispatch(setUser(JSON.stringify(newUserData)));
    setEmail('');
    setUsername('');
    setPhotoURL('');
    navigation.goBack();
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={styles.title}>Edit Your Profile!</Text>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Change your email address"
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
            placeholder="Choose a diffrent username"
            placeholderTextColor={'limegreen'}
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Paste your profile image URL"
            placeholderTextColor={'limegreen'}
            value={photoURL}
            onChangeText={setPhotoURL}
          />
        </View>
      </View>
      <Pressable style={styles.editButton} onPress={saveChanges}>
        <Text style={styles.editButton_text}>Save</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default EditProfile