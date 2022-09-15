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
        marginLeft: 20,
        marginTop: 10,
    },
    albumTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    albumArtistName: {
        fontSize: 20,
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
        justifyContent: 'space-evenly',
        marginLeft: 20,
    },
    playlistName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    playlistDate: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    trackName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    trackArtistName: {
        fontSize: 20,
    },
    trackDuration: {
        fontSize: 20,
        fontStyle: 'italic',
    }

})