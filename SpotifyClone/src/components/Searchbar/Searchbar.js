import React from 'react';
import {SafeAreaView, View, TextInput} from 'react-native';
import styles from './Searchbar.style';
import { Feather } from '@expo/vector-icons';

const Searchbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarArea}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Search..."
            placeholderTextColor="white"
            onChangeText={null}
          />
        </View>
        <Feather
          name="arrow-right-circle"
          size={35}
          color="white"
          onPress={null}
        />
      </View>
    </SafeAreaView>
  );
};

export default Searchbar;
