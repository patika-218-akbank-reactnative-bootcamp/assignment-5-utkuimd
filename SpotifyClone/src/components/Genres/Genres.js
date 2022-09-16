import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Genres.style';

const Genres = () => {
    const navigation = useNavigation();

    const gotoGenreList = (key) => {
        navigation.navigate( 'GenreListScreen', { genreID: key } );
    };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Genres</Text>
        <View style={styles.genres}>
            <Pressable style={styles.genreArea} onPress={() => gotoGenreList('302127')}>
                <Text style={styles.genreText}>Dans</Text>
            </Pressable>
            <Pressable style={styles.genreArea} onPress={() => gotoGenreList('302128')}>
                <Text style={styles.genreText}>Pop</Text>
            </Pressable>
            <Pressable style={styles.genreArea} onPress={() => gotoGenreList('302129')}>
                <Text style={styles.genreText}>Reggae</Text>
            </Pressable>
            <Pressable style={styles.genreArea} onPress={() => gotoGenreList('302133')}>
                <Text style={styles.genreText}>Rock</Text>
            </Pressable>
            <Pressable style={styles.genreArea} onPress={() => gotoGenreList('302134')}>
                <Text style={styles.genreText}>Rap / Hip Hop</Text>
            </Pressable>
            <Pressable style={styles.genreArea} onPress={() => gotoGenreList('302135')}>
                <Text style={styles.genreText}>Metal</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Genres