import React, { useState } from 'react';
import {SafeAreaView, View, TextInput} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchMusic } from '../../store/store';
import { Feather } from '@expo/vector-icons';
import styles from './Searchbar.style';

const Searchbar = ({focused}) => {
  const [searchedText, setSearchedText] = useState('');
  const dispatch = useDispatch();

  const searchMusic = () => {
    axios.get(`https://api.deezer.com/search/track?q=${searchedText}`)
    .then((response) => {
      dispatch(setSearchMusic(response.data));
    })
    setSearchedText('');
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarArea}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Search..."
            placeholderTextColor="white"
            onChangeText={setSearchedText}
            value={searchedText}
            onFocus={focused}
          />
        </View>
        <Feather
          name="arrow-right-circle"
          size={35}
          color="white"
          onPress={searchMusic}
        />
      </View>
    </SafeAreaView>
  );
};

export default Searchbar;
