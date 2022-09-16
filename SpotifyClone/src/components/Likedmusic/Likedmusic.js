import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './Likedmusic.style';

const Likedmusic = ({likedMusic}) => {
    const {theme} = useSelector(state => state.theme);
  return (
    <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri: likedMusic.album.cover_medium}} />
            <View style={styles.detail}>
                <View>
                    <Text numberOfLines={2} style={[styles.title, {color: theme.color}]}>{likedMusic.title}</Text>
                    <Text style={[styles.artistName, {color: theme.color}]}>{likedMusic.artist.name}</Text>
                </View>
                <View style={styles.like}>
                    <Text style={[styles.duration, {color: theme.color}]}>Duration: {likedMusic.duration} sec.</Text>
                </View>
            </View>
      </SafeAreaView>
  )
}

export default Likedmusic