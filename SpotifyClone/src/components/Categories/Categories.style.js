import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('screen').height / 3.5,
        justifyContent: 'center',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 30,
        marginBottom: 10,
      },
      categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
      },
      categoryArea: {
        height: 60,
        width: '45%',
        backgroundColor: 'limegreen',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
      },
      categoryText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      },

})