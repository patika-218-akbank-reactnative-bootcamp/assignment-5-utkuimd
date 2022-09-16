import React from 'react';
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLikeMusic } from '../../store/store';
import { AntDesign } from '@expo/vector-icons';
import styles from './Musiclist.style';

const Musiclist = ({music}) => {
    const dispatch = useDispatch();
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
                    <Text style={styles.albumTitle}>{music.title}</Text>
                    <Text style={styles.albumArtistName}>{music.artist.name}</Text>
                </View>
            </View>
        }
        else if (music.type === 'artist') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.picture_medium}}/>
                <View style={styles.musicDetail}>
                    <Text style={styles.artistName}>{music.name}</Text>
                    <Text style={styles.artistPosition}>#{music.position}</Text>
                </View>
            </View>
        }
        else if (music.type === 'playlist') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.picture_medium}}/>
                <View style={styles.playlistDetail}>
                    <Text style={styles.playlistName}>{music.title}</Text>
                    <Text style={styles.playlistDate}>Creation Date: {music.creation_date.split(' ')[0]}</Text>
                </View>
            </View>
        }
        else if (music.type === 'track') {
            return <View style={styles.renderContainer}>
                <Image style={styles.musicImage} source={{uri: music.album.cover_medium}}/>
                <View style={styles.trackDetail}>
                    <View>
                        <Text style={styles.trackName}>{music.title}</Text>
                        <Text style={styles.trackArtistName}>{music.artist.name}</Text>
                    </View>
                    <View style={styles.trackLike}>
                        <Text style={styles.trackDuration}>Duration: {music.duration} sec.</Text>
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