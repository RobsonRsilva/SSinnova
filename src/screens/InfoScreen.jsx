import { View, Text, ImageBackground } from "react-native";
import imgBG from '../../res/img/ssinnova-bg-app.png';

function InfoScreen() {
    return (
        <ImageBackground style={{flex: 1}} source={imgBG} resizeMode="cover">
            <View style={{flex: 1}}>
                <Text>
                    Página Histórico
                </Text>
            </View>
        </ImageBackground>

    );
}
export default InfoScreen;