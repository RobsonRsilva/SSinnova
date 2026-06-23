import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Pressable } from "react-native";
import imgBG from '../../res/img/ssinnova-bg-app.png';

function HomeScreen({ navigation, route }) {
    const dados = route.params ?? {};
    return (
        <ImageBackground style={{ flex: 1 }} source={imgBG} resizeMode="cover">
            <View>
                <Text>
                    Token:   {dados?.token}
                </Text>
            </View>
            <ScrollView horizontal={true}>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}} >
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Info')}>
                    <View style={{ padding: 10}}>
                        <Image source={require('../../res/img/home/Background-1.png')} />
                        <Text style={{ alignSelf: 'center' }}>Pizzas</Text>
                    </View>
                </Pressable>

            </ScrollView>
        </ImageBackground>
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
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    rosa: {
        flex: 0,
        alignSelf: 'center',
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