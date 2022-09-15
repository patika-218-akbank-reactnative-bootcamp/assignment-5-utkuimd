import React from 'react';
import { SafeAreaView, View, Text, Pressable, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setMusicList } from '../../store/store';
import axios from 'axios';
import styles from './Categories.style';

const Categories = () => {

    const dispatch = useDispatch();

    const getMusics = (key) => {
        axios.get(`https://api.deezer.com/chart/0/${key}`)
        .then((response) => {
            dispatch(setMusicList(response.data));
        })
        .catch((error) => Alert.alert(error.message));
    }

    const getGenres = () => {
        axios.get('https://api.deezer.com/genre')
        .then((response) => {
            dispatch(setMusicList(response.data));
        })
        .catch((error) => Alert.alert(error.message));
    }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.categoryArea} onPress={() => getMusics('albums')}>
        <Text style={styles.categoryText}>Albums</Text>
      </Pressable>
      <Pressable style={styles.categoryArea} onPress={() => getMusics('artists')}>
        <Text style={styles.categoryText}>Artists</Text>
      </Pressable>
      <Pressable style={styles.categoryArea} onPress={() => getMusics('playlists')}>
        <Text style={styles.categoryText}>Playlists</Text>
      </Pressable>
      <Pressable style={styles.categoryArea} onPress={() => getGenres()}>
        <Text style={styles.categoryText}>Genres</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Categories;
