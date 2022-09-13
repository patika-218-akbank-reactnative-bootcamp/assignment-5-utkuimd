import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      welcomeText: {
        color: 'limegreen',
        fontSize: 32,
        fontWeight: 'bold',
        width: '60%',
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
      gotoSignIn: {
        color: '#1F51FF',
        textDecorationLine: 'underline',
        fontSize: 15,
        marginTop: 7,
      },
      signInButton: {
        width: '80%',
        height: '8%',
        backgroundColor: 'limegreen',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
      },
      signInText: {
        fontSize: 20,
        color: 'white',
      },
})