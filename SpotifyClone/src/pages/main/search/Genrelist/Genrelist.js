import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import GenreMusiclist from '../../../../components/GenreMusiclist';
import styles from './Genrelist.style';

const Genrelist = () => {

  const genreMusicList = useSelector(state => state.genreMusicList)
  const {theme} = useSelector(state => state.theme);

  const renderGenreMusicList = ({item}) => <GenreMusiclist genreMusic={item} />

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.list}>
        <FlatList 
          data={genreMusicList.genreMusicList.data}
          renderItem={renderGenreMusicList} 
        />
      </View>
    </SafeAreaView>
  )
}

export default Genrelist