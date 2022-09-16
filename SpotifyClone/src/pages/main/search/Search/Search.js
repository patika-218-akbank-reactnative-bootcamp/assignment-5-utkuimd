import React, { useState } from 'react';
import { SafeAreaView, FlatList, Pressable, Text, View } from 'react-native';
import Searchbar from '../../../../components/Searchbar';
import Genres from '../../../../components/Genres';
import SearchMusiclist from '../../../../components/SearchMusiclist';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchMusic } from '../../../../store/store';
import { Feather } from '@expo/vector-icons';
import styles from './Search.style';

const Search = () => {

  const [focusOrBlur, setFocusOrBlur] = useState(false);

  const searchMusic = useSelector(state => state.searchMusic);
  const {theme} = useSelector(state => state.theme);

  const renderSearchMusic = ({item}) => <SearchMusiclist searchedMusic={item}/>

  const dispatch = useDispatch();
 
  const searchBarFocused = () => {
    setFocusOrBlur(true);
  };

  const gotoGenres = () => {
    setFocusOrBlur(false);
    dispatch(setSearchMusic([]));
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Searchbar focused={searchBarFocused} />
      {
        focusOrBlur === true ? (
          <View style={styles.searchArea}>
            <Pressable style={styles.gotoGenres} onPress={gotoGenres}>
              <Feather name='arrow-left-circle' size={30} color='limegreen' />
              <Text style={styles.gotoGenres_text}>Go to Genres</Text>
            </Pressable>
            <FlatList 
              data={searchMusic.searchMusic.data}
              renderItem={renderSearchMusic}
            />
          </View>
          
        ) : (
          <Genres />
        )
      }
    </SafeAreaView>
  )
}

export default Search