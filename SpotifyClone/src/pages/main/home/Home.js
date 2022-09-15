import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Categories from '../../../components/Categories';
import Musiclist from '../../../components/Musiclist';
import { useSelector } from 'react-redux';
import styles from './Home.style';

const Home = () => {
    const musicList = useSelector(state => state.musicList);
    const renderMusic = ({item}) => <Musiclist music={item} />
  return (
      <SafeAreaView style={styles.container}>
          <FlatList
            ListHeaderComponent={<Categories />}
            data={musicList.musicList.data}
            renderItem={renderMusic}
          />
      </SafeAreaView>
  )
}

export default Home;
