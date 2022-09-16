import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarArea: {
    flexDirection: 'row',
    width: '90%',
    height: Dimensions.get('screen').height / 14,
    backgroundColor: 'limegreen',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },
  inputContainer: {
    width: '80%',
    height: '80%',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 20,
    color: 'white',
  },
});
