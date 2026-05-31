import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
    return (
         <SafeAreaView style={{ flex: 1 }}>
           <ImageBackground style={{ flex: 1, backgroundColor: '#0000001c' }} imageStyle={{opacity: 0.3}} source={require('../../res/img/ssinnova-bg-app.png')} >
           
           </ImageBackground>
        </SafeAreaView>
    );
}
export default HomeScreen;