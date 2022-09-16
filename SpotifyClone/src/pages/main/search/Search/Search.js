import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Searchbar from '../../../../components/Searchbar';
import Genres from '../../../../components/Genres';
import styles from './Search.style';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar />
      <Genres />
    </SafeAreaView>
  )
}

export default Search