import { StyleSheet, Text, View } from "react-native";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text>Olá Mundo!</Text>
            </View>
            <View style={[styles.quadrado, styles.amarelo]}>
                <Text style={styles.fonteMedia}>1</Text>
            </View>
            <View style={[styles.quadrado, styles.rosa]}>
                <Text style={styles.fonteMedia}>2</Text>
            </View>
            <View style={[styles.quadrado, styles.preto]}>
                <Text style={[styles.textoBranco, styles.fonteMedia]}>3</Text>
            </View>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#c0f7f6',
    },
    titulo: {
        backgroundColor: '#ff2525',
    },
    quadrado: {
        justifyContent: 'center',
        alignItems : 'center',
        width: 100,
        height: 100,
    },
    rosa: {
        flex: 0,
        alignSelf : 'center',
        backgroundColor: '#f308d754'
    },
    amarelo: {
        flex: 0,
        backgroundColor: '#fafe10'
    },
    preto: {
        flex: 0,
        alignSelf: 'flex-end',
        backgroundColor: '#000'
    },
    textoBranco: {
        color: '#fff',
    },
    fonteMedia: {
        fontSize: 30,
    }

});