import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    searchArea: {
        flex: 1,
    },
    gotoGenres: {
        width: '45%',
        height: 60,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'limegreen',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        marginBottom: 20,
    },
    gotoGenres_text: {
        color: 'limegreen',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})