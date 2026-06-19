import { StyleSheet, Text, View, ImageBackground} from "react-native";
import imgBG from '../../res/img/ssinnova-bg-app.png';

function HomeScreen({navigation}) {
    return (
       <ImageBackground style={{flex: 1}} source={imgBG} resizeMode="cover">
               <View>
                   <Text>
                       Página Histórico
                   </Text>
               </View>
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