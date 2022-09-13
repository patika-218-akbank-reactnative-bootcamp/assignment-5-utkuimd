import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: 'limegreen',
        fontSize: 32,
        fontWeight: 'bold',
        width: '80%',
        marginBottom: 20,
        marginLeft: 20,
      },
      getInformation: {
        width: '80%',
        height: '8%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'limegreen',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      getInformationArea: {
        width: '95%',
        height: '80%',
        paddingLeft: 10,
        justifyContent: 'center',
      },
      inputText: {
        fontSize: 20,
        color: 'blueviolet',
      },
      signUpButton: {
        width: '80%',
        height: '8%',
        backgroundColor: 'limegreen',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
      },
      signUpText: {
        fontSize: 20,
        color: 'white',
      },
})