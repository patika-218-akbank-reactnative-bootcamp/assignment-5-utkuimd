import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: Dimensions.get('screen').height / 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    username: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 7,
    },
    likedMusicsTitleArea: {
        width: '100%',
        height: Dimensions.get('screen').height / 8,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    likedMusicsTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
})