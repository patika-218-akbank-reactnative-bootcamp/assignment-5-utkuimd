import React from 'react';
import { SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '../../../../store/store';
import styles from './Settings.style';

const Settings = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profilePictureURL = JSON.parse(user.user).photoURL;

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    dispatch(setUser(null));
  };

  const gotoEditProfile = () => {
    navigation.navigate('EditProfileScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetail}>
        <Image
          style={styles.profilePicture}
          source={{ uri: profilePictureURL }}
        />
        <Text style={styles.username}>{JSON.parse(user.user).username}</Text>
        <Text style={styles.email}>{JSON.parse(user.user).email}</Text>
      </View>
      <View style={styles.settingsButtons_div}>
        <Pressable style={styles.settingsButton} onPress={gotoEditProfile}>
          <Text style={styles.settingsButton_text}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.settingsButton} onPress={null}>
          <Text style={styles.settingsButton_text}>Change Theme</Text>
        </Pressable>
      </View>
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.settingsButton_text}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Settings;
