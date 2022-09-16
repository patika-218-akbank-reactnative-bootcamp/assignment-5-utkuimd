import React from 'react';
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLikeMusic } from '../../store/store';
import { AntDesign } from '@expo/vector-icons';
import styles from './SearchMusiclist.style';

const SearchMusiclist = ({searchedMusic}) => {
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
            <Image style={styles.image} source={{uri: searchedMusic.album.cover_medium}} />
            <View style={styles.detail}>
                <View>
                    <Text numberOfLines={2} style={styles.title}>{searchedMusic.title}</Text>
                    <Text style={styles.artistName}>{searchedMusic.artist.name}</Text>
                </View>
                <View style={styles.like}>
                    <Text style={styles.duration}>Duration: {searchedMusic.duration} sec.</Text>
                    <AntDesign name='heart' size={30} color='red' onPress={() => likeMusic(searchedMusic.id)} />
                </View>
            </View>
      </SafeAreaView>
  )
}

export default SearchMusiclist