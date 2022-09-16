import React from 'react';
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setLikeMusic } from '../../store/store';
import { AntDesign } from '@expo/vector-icons';
import styles from './GenreMusiclist.style';

const GenreMusiclist = ({genreMusic}) => {

    const genreMusicImage = useSelector(state => state.genreMusicImage);
    const {theme} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const likeMusic = (id) => {
        axios.get(`https://api.deezer.com/track/${id}`)
        .then((response) => {
            dispatch(setLikeMusic(response.data));
        })
        .catch((error) => {Alert.alert(error.message)});
    };

  return (
      <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri: genreMusicImage.genreMusicImage.cover_medium}} />
            <View style={styles.detail}>
                <View>
                    <Text numberOfLines={2} style={[styles.title, {color: theme.color}]}>{genreMusic.title}</Text>
                    <Text style={[styles.artistName, {color: theme.color}]}>{genreMusic.artist.name}</Text>
                </View>
                <View style={styles.like}>
                    <Text style={[styles.duration, {color: theme.color}]}>Duration: {genreMusic.duration} sec.</Text>
                    <AntDesign name='heart' size={30} color='red' onPress={() => likeMusic(genreMusic.id)}/>
                </View>
            </View>
      </SafeAreaView>
  )
}

export default GenreMusiclist