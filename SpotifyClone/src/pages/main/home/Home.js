import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Categories from '../../../components/Categories';
import { useSelector } from 'react-redux';
import styles from './Home.style';

const Home = () => {
    const musicList = useSelector(state => state.musicList);
  return (
      <SafeAreaView style={styles.container}>
          <Categories />
          <Text>{JSON.stringify(musicList)}</Text>
      </SafeAreaView>
  )
}

export default Home;
