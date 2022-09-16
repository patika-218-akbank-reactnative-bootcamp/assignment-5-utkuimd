import React from 'react';
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLikeMusic } from '../../store/store';
import { AntDesign } from '@expo/vector-icons';
import styles from './Musiclist.style';

const Musiclist = ({music}) => {

    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);

    const likeMusic = (id) => {
        axios.get(`https://api.deezer.com/track/${id}`)
        .then((response) => {
            dispatch(setLikeMusic(response.data));
        })
        .catch((error) => {Alert.alert(error.message)});
    };

    const renderMusiclist = () => {
        if (music.type === 'album') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.cover_medium ? music.cover_medium : music.artist.picture_medium}}/>
                <View style={styles.musicDetail}>
                    <Text numberOfLines={2} style={[styles.albumTitle, {color: theme.color}]}>{music.title}</Text>
                    <Text style={[styles.albumArtistName, {color: theme.color}]}>{music.artist.name}</Text>
                </View>
            </View>
        }
        else if (music.type === 'artist') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.picture_medium}}/>
                <View style={styles.musicDetail}>
                    <Text style={[styles.artistName, {color: theme.color}]}>{music.name}</Text>
                    <Text style={[styles.artistPosition, {color: theme.color}]}>#{music.position}</Text>
                </View>
            </View>
        }
        else if (music.type === 'playlist') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.picture_medium}}/>
                <View style={styles.playlistDetail}>
                    <Text style={[styles.playlistName, {color: theme.color}]}>{music.title}</Text>
                    <Text style={[styles.playlistDate, {color: theme.color}]}>Creation Date: {music.creation_date.split(' ')[0]}</Text>
                </View>
            </View>
        }
        else if (music.type === 'track') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.album.cover_medium}}/>
                <View style={styles.trackDetail}>
                    <View>
                        <Text style={[styles.trackName, {color: theme.color}]}>{music.title}</Text>
                        <Text style={[styles.trackArtistName, {color: theme.color}]}>{music.artist.name}</Text>
                    </View>
                    <View style={styles.trackLike}>
                        <Text style={[styles.trackDuration, {color: theme.color}]}>Duration: {music.duration} sec.</Text>
                        <AntDesign name='heart' size={30} color='red' onPress={() => likeMusic(music.id)}/>
                    </View>
                </View>
            </View>
        }
    }

  return (
      <SafeAreaView style={styles.container}>
          {renderMusiclist()}
      </SafeAreaView>
  )
}

export default Musiclist