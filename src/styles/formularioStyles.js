import { StyleSheet } from "react-native";

export const formularioStyles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1A418E',
        alignSelf: 'stretch',
        borderRadius: 8,
    },
    label: {
        alignSelf: 'flex-start',
    },
    botaoLogin:{
        alignSelf: 'stretch',
        backgroundColor: '#1A418E',
        height: 52,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});