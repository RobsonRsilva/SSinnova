import { Alert, Text, View, StyleSheet, TextInput, Button, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@react-native-vector-icons/ionicons/static";
import { formularioStyles } from '../styles/formularioStyles'
import { useState } from 'react'
import { createAsyncStorage } from "@react-native-async-storage/async-storage";
const storage = createAsyncStorage('SSInnova');
function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const rotaLogin = "https://devgarca.com.br/ssinnova/api/public/index.php?rota=login";

    async function salvarDados(token, usuario) {
        try {
         await storage.setItem('token', token);
         await storage.setItem('usuario', JSON.stringify(usuario));
        } catch (erro) {
            console.log(erro);
        }
    }
    async function Login() {
        let response = await fetch(rotaLogin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha }),
        });
        let dadosUsuario = await response.json();
        if (dadosUsuario.status) {
            salvarDados(dadosUsuario.token, dadosUsuario.usuario);
            navigation.replace('Routes', {
                token: dadosUsuario.token,
                usuario: dadosUsuario.usuario,
            });
        } else {
            Alert.alert('Erro');
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="person-circle" size={100} color="#1A418E" />
            <Text style={styles.textoLogin}>Login</Text>
            <Text nativeID="email" style={[formularioStyles.label, styles.textoLabel]}>Email:</Text>
            <TextInput accessibilityLabelledBy="email" placeholderTextColor='#9f9c9cb3' value={email} onChangeText={setEmail} style={formularioStyles.input} placeholder="Digite seu melhor email" />
            <Text nativeID="senha" style={[formularioStyles.label, styles.textoLabel]}>Senha:</Text>
            <TextInput accessibilityLabelledBy="senha" placeholderTextColor='#9f9c9cb3' value={senha} onChangeText={setSenha} style={formularioStyles.input} placeholder="Digite sua senha" />
            <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
            <Pressable onPress={Login} style={({ pressed }) => [formularioStyles.botaoLogin, { opacity: pressed ? 0.85 : 1 }]}>
                <Text style={{ color: '#fff' }} >Entrar</Text>
            </Pressable>
            <Text style={styles.textoNaoConta}>Não tem conta? <Text onPress={() => navigation.navigate('Cadastro')} style={styles.textoCadastrese}>Cadastre-se</Text></Text>
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
        marginBottom: 10,
        color: '#1A418E'
    },
    textoLogin: {
        fontSize: 32,
        fontWeight: 'semibold',
        color: '#1A418E',
    },
    textoLabel: {
        marginBottom: 5,
        marginTop: 10,
    },
    textoNaoConta: {
        marginTop: 50,
        color: '#1A418E',
    },
    textoCadastrese: {
        fontWeight: 'bold',

    },
    botao: {
        marginTop: 10,
    }
});