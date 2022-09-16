import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './Likedmusic.style';

const Likedmusic = ({likedMusic}) => {
  return (
    <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri: likedMusic.album.cover_medium}} />
            <View style={styles.detail}>
                <View>
                    <Text numberOfLines={2} style={styles.title}>{likedMusic.title}</Text>
                    <Text style={styles.artistName}>{likedMusic.artist.name}</Text>
                </View>
                <View style={styles.like}>
                    <Text style={styles.duration}>Duration: {likedMusic.duration} sec.</Text>
                </View>
            </View>
      </SafeAreaView>
  )
}

export default Likedmusic