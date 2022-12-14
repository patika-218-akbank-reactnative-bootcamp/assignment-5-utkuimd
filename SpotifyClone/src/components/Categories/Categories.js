import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMusicList } from '../../store/store';
import axios from 'axios';
import styles from './Categories.style';

const Categories = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);

    const getMusics = (key) => {
        axios.get(`https://api.deezer.com/chart/0/${key}`)
        .then((response) => {
            dispatch(setMusicList(response.data));
        })
        .catch((error) => Alert.alert(error.message));
    };

    useEffect(() => {
      getMusics('albums');
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, {color: theme.color}]}>Playlists & Categories</Text>
      <View style={styles.categories}>
        <Pressable style={styles.categoryArea} onPress={() => getMusics('albums')}>
          <Text style={styles.categoryText}>Albums</Text>
        </Pressable>
        <Pressable style={styles.categoryArea} onPress={() => getMusics('artists')}>
          <Text style={styles.categoryText}>Artists</Text>
        </Pressable>
        <Pressable style={styles.categoryArea} onPress={() => getMusics('playlists')}>
          <Text style={styles.categoryText}>Playlists</Text>
        </Pressable>
        <Pressable style={styles.categoryArea} onPress={() => getMusics('tracks')}>
          <Text style={styles.categoryText}>Tracks</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Categories;
