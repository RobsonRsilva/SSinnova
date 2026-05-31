import { View, Text, StyleSheet, TextInput, Button, StatusBar, Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function LoginScreen() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const rotaLogin = "https://devgarca.com.br/ssinnova/api/public/index.php?rota=login";
    async function FazerLogin() {
        console.log(email);
        console.log(senha);
        console.log(JSON.stringify({ email, senha }));
        console.log('O usuário quer fazer login!');
        let resposta = await fetch(rotaLogin, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email, senha })

        });
        let retorno = await resposta.json();

        if (retorno.status) {
            console.log(retorno);
            console.log(retorno.mensagem);
            console.log(retorno.token);
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <Ionicons name="person-sharp" size={100} color="#1A3F90" />
            <Text style={styles.textoLogin}>Login</Text>
            <Text style={[{ alignSelf: 'flex-start' }, styles.btnLabel]} nativeID="email">Email:</Text>
            <TextInput accessibilityLabelledBy="email" placeholderTextColor="#1A3F90" value={email} onChangeText={setEmail} style={[styles.input]} placeholder="Seu melhor e-mail" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 10 }, styles.btnLabel]} nativeID="email">Senha:</Text>
            <TextInput placeholderTextColor="#1A3F90" value={senha} onChangeText={setSenha} style={[styles.input]} placeholder="Sua senha" />
            <Text style={[styles.textoSenha]}>Esqueceu sua senha?</Text>
            <Pressable onPress={FazerLogin} style={({ pressed }) => [styles.btnLogin, { opacity: pressed ? 0.85 : 1 }]}>
                <Text style={{ alignSelf: 'center', color: '#fff', padding: 7 }} >Entrar</Text>
            </Pressable>
            <Text style={styles.textoCadastro}>Não tem conta? Cadastre-se</Text>
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
    input: {
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#1A3F90',
        borderRadius: 10,
    },
    btnLogin: {
        width: '100%',
        backgroundColor: '#1A3F90',
        color: '#fff',
        marginTop: 15,
    },
    btnLabel: {
        
    },
    textoCadastro: {
        color: '#1A3F90',
        marginTop: 30,
    },
    textoLogin: {
        color: '#1A3F90',
        fontSize: 25,
        marginVertical: 50,
    },
    textoSenha: {
        fontSize: 13,
        color: '#1A3F90',
        alignSelf: 'flex-end',
        marginTop: 5,
    }
});