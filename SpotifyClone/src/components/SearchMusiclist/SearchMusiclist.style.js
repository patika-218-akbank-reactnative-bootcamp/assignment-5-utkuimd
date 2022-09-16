import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    detail: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    artistName: {
        fontSize: 16,
    },
    like: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        alignItems: 'center',
    },
    duration: {
        fontSize: 18,
        fontStyle: 'italic',
    }
})