import { View, Text, StyleSheet, TextInput, Button, StatusBar, Pressable, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

     // Chamada a dados externos via API de forma assíncrona }
    async function chamarCep() {
     console.log(cep);
        if (cep.length === 9) {
            try {
                let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/ `);
                let dadosRecebidos = await resposta.json();
                console.log(dadosRecebidos.logradouro);
                setLogradouro(dadosRecebidos.logradouro);
                setBairro(dadosRecebidos.bairro);
                setLocalidade(dadosRecebidos.localidade);
                setEstado(dadosRecebidos.estado);
                setUf(dadosRecebidos.uf);
            } catch (erro) {
                console.log(`Erro em buscar o cep: ${erro}`);
            }

        }else{
            alert('CEP com numero de caracteres inválidos');
        }
    }


    const rotaCadastro = "https://devgarca.com.br/ssinnova/api/public/index.php?rota=cadastro";
    async function Cadastro() {

        let resposta = await fetch(rotaCadastro, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({nome, email, senha, cep, logradouro, bairro, localidade, uf, estado})

        });
        let retorno = await resposta.json();
        console.log(retorno);
        if (retorno.status) {
            console.log(retorno);
            console.log(retorno.mensagem);
            console.log(retorno.token);
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <KeyboardAvoidingView style={{flex: 1, width: '100%'}} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
            <ScrollView style={{flex: 1, width: '100%'}}>
            <Text style={styles.textoLogin}>Dados Gerais</Text>
            <Text style={[{ alignSelf: 'flex-start' }, styles.btnLabel]} nativeID="nome">Nome Completo:</Text>
            <TextInput accessibilityLabelledBy="email" placeholderTextColor="#1A3F90" value={nome} onChangeText={setNome} style={[styles.input]} placeholder="Nome completo" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="email">Email:</Text>
            <TextInput keyboardType="email-address" accessibilityLabelledBy="email" placeholderTextColor="#1A3F90" value={email} onChangeText={setEmail} style={[styles.input]} placeholder="Seu melhor e-mail" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="senha">Senha:</Text>
            <TextInput placeholderTextColor="#1A3F90" value={senha} onChangeText={setSenha} style={[styles.input]} placeholder="Sua senha" />
            <Text style={styles.textoLogin}>Endereço</Text>
            <Text style={[{ alignSelf: 'flex-start' }, styles.btnLabel]} nativeID="email">CEP:</Text>
            <TextInput keyboardType="numeric" onBlur={chamarCep} accessibilityLabelledBy="cep" placeholderTextColor="#1A3F90" value={cep} onChangeText={setCep} style={[styles.input]} placeholder="CEP" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="logradouro">Nome da Rua:</Text>
            <TextInput accessibilityLabelledBy="email" placeholderTextColor="#1A3F90" value={logradouro} onChangeText={setLogradouro} style={[styles.input]} placeholder="Nome da Rua" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="bairro">Bairro:</Text>
            <TextInput placeholderTextColor="#1A3F90" value={bairro} onChangeText={setBairro} style={[styles.input]} placeholder="Bairro" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="localidade">Cidade:</Text>
            <TextInput placeholderTextColor="#1A3F90" value={localidade} onChangeText={setLocalidade} style={[styles.input]} placeholder="Cidade" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="uf">UF:</Text>
            <TextInput placeholderTextColor="#1A3F90" value={uf} onChangeText={setUf} style={[styles.input]} placeholder="UF" />
            <Text style={[{ alignSelf: 'flex-start', marginTop: 8 }, styles.btnLabel]} nativeID="estado">Estado:</Text>
            <TextInput placeholderTextColor="#1A3F90" value={estado} onChangeText={setEstado} style={[styles.input]} placeholder="Estado" />
            <Pressable onPress={Cadastro} style={({ pressed }) => [styles.btnLogin, { opacity: pressed ? 0.85 : 1 }]}>
                <Text style={{ alignSelf: 'center', color: '#fff', padding: 7 }} >CADASTRAR</Text>
            </Pressable>
            <Text onPress={() => navigation.navigate('Login')} style={styles.textoCadastro}>Termos de uso</Text>
            <Text onPress={() => navigation.navigate('Login')} style={styles.textoCadastro}>Já possui conta? Entrar</Text>
         </ScrollView>
         </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default CadastroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 7,
    },
    textoLogin: {
        color: '#1A3F90',
        fontSize: 25,
        marginVertical: 5,
        alignSelf: 'flex-start'
    },
    textoSenha: {
        fontSize: 13,
        color: '#1A3F90',
        alignSelf: 'flex-end',
        marginTop: 5,
    }
});