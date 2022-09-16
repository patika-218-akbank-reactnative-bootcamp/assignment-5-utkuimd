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
    const {theme} = useSelector(state => state.theme);

    const navigation = useNavigation();

    const renderLikedMusicList = ({item}) => <Likedmusic likedMusic={item} />

    const gotoSettings = () => {
        navigation.navigate('SettingsScreen');
    };

  return (
      <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
          <View style={styles.header}>
              <View style={styles.userDetails}>
                <Image style={styles.profileImage} source={{uri: JSON.parse(user.user).photoURL}} />
                <Text style={[styles.username, {color: theme.color}]}>{JSON.parse(user.user).username}</Text>
              </View>
              <Feather name="settings" size={30} color={theme.color} onPress={gotoSettings} />
          </View>
          <View style={styles.likedMusicsTitleArea}>
            <Text style={[styles.likedMusicsTitle, {color: theme.color}]}>Liked Musics</Text>
          </View>
          <FlatList 
            data={likedMusicList.likeMusic}
            renderItem={renderLikedMusicList}
            />
      </SafeAreaView>
  )
}

export default Profile