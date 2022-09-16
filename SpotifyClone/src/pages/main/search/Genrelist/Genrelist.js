import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import GenreMusiclist from '../../../../components/GenreMusiclist';
import styles from './Genrelist.style';

const Genrelist = () => {

  const genreMusicList = useSelector(state => state.genreMusicList)
  const genreMusicImage = useSelector(state => state.genreMusicImage)
  const renderGenreMusicList = ({item}) => <GenreMusiclist genreMusic={item} />

  const show = () => {
    console.log(genreMusicImage);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={show}>showwwwwww</Text>
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