import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Likedmusic from '../../../../components/Likedmusic';
import styles from './Profile.style';

const Profile = () => {
    const user = useSelector(state => state.user);
    const likedMusicList = useSelector(state => state.likeMusic);
    const navigation = useNavigation();
    const renderLikedMusicList = ({item}) => <Likedmusic likedMusic={item} />

    const gotoSettings = () => {
        navigation.navigate('SettingsScreen');
    };
    const show = () => {
        console.log(likedMusicList);
    }
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <View style={styles.userDetails}>
                <Image style={styles.profileImage} source={{uri: JSON.parse(user.user).photoURL}} />
                <Text style={styles.username}>{JSON.parse(user.user).username}</Text>
              </View>
              <Feather name="settings" size={30} color="black" onPress={gotoSettings} />
          </View>
          <Text onPress={show}>showwwwwww</Text>
          {<FlatList 
            data={likedMusicList.likeMusic}
            renderItem={renderLikedMusicList}
  />}
      </SafeAreaView>
  )
}

export default Profile