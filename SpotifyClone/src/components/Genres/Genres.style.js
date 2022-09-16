import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('screen').height / 2,
        justifyContent: 'center',
        backgroundColor: 'pink',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 30,
        marginBottom: 10,
      },
      genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
      },
      genreArea: {
        height: 80,
        width: '45%',
        backgroundColor: 'limegreen',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
      },
      genreText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      },
})