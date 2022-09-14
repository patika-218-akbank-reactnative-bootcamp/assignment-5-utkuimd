import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './Profile.style';

const Profile = () => {
    const user = useSelector(state => state.user);
    const navigation = useNavigation();

    const gotoSettings = () => {
        navigation.navigate('SettingsScreen');
    };
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <View style={styles.userDetails}>
                <Image style={styles.profileImage} source={{uri: JSON.parse(user.user).photoURL}} />
                <Text style={styles.username}>{JSON.parse(user.user).username}</Text>
              </View>
              <Feather name="settings" size={30} color="black" onPress={gotoSettings} />
          </View>
      </SafeAreaView>
  )
}

export default Profile