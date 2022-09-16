import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import GenreMusiclist from '../../../../components/GenreMusiclist';
import styles from './Genrelist.style';

const Genrelist = () => {

  const genreMusicList = useSelector(state => state.genreMusicList)
  const renderGenreMusicList = ({item}) => <GenreMusiclist genreMusic={item} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList 
          data={genreMusicList.genreMusicList.tracks.data}
          renderItem={renderGenreMusicList} 
        />
      </View>
    </SafeAreaView>
  )
}

export default Genrelist