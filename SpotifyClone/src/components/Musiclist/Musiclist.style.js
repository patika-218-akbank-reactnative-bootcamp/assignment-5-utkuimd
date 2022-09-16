import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    renderContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    musicImage: {
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    musicDetail: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },
    albumTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    albumArtistName: {
        fontSize: 16,
        marginTop: 2,
    },
    artistName: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    artistPosition: {
        fontSize: 22,
    },
    playlistDetail: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    playlistName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    playlistDate: {
        fontSize: 16,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        marginTop: 2,
    },
    trackDetail: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-evenly',
    },
    trackName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    trackArtistName: {
        fontSize: 16,
    },
    trackLike: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        alignItems: 'center',
    },
    trackDuration: {
        fontSize: 18,
        fontStyle: 'italic',
    }

})