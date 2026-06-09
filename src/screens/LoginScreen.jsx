import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@react-native-vector-icons/ionicons/static";
import { formularioStyles } from '../styles/formularioStyles'
function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="person-circle" size={100} color="#1A418E" />
            <Text>Login</Text>
            <Text style={formularioStyles.label}>Email:</Text>
            <TextInput style={formularioStyles.input} placeholder="Digite seu melhor email" />
            <Text style={formularioStyles.label}>Senha:</Text>
            <TextInput style={formularioStyles.input} placeholder="Digite sua senha" />
            <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
            <Button style={styles.botao} title="Entrar" />
            <Text style={styles.textoCadastrese}>Não tem conta? <Text>Cadastre-se</Text></Text>
        </SafeAreaView>
    );
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textoEsqueceuSenha: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    textoCadastrese: {
    marginTop: 10,
    },
    botao: {
        marginTop: 10,
    }
});