import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        height: Dimensions.get('screen').height / 1.5,
    },
})