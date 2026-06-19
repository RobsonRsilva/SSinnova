import { View, Text, ImageBackground } from "react-native";
import imgBG from '../../res/img/ssinnova-bg-app.png';

function HistoricoScreen() {
    return (
        <ImageBackground style={{ flex: 1 }} source={imgBG} resizeMode="cover">
            <View>
                <Text>
                    Página Histórico
                </Text>
            </View>
        </ImageBackground>
    );
}
export default HistoricoScreen;