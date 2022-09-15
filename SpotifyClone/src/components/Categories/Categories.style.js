import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        backgroundColor: 'blue',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
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