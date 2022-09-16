import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import styles from './GenreMusiclist.style';

const GenreMusiclist = ({genreMusic}) => {
    const genreMusicList = useSelector(state => state.genreMusicList);
  return (
      <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri: genreMusicList.genreMusicList.cover_medium}} />
            <View style={styles.detail}>
                <View>
                    <Text numberOfLines={2} style={styles.title}>{genreMusic.title}</Text>
                    <Text style={styles.artistName}>{genreMusic.artist.name}</Text>
                </View>
                <View style={styles.like}>
                    <Text style={styles.duration}>Duration: {genreMusic.duration} sec.</Text>
                    <AntDesign name='heart' size={30} color='red' />
                </View>
            </View>
      </SafeAreaView>
  )
}

export default GenreMusiclist