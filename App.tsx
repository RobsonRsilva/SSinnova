import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './src/screens/LoginScreen'
import Rotas from './src/routes/Rotas'
import CadastroScreen from './src/screens/CadastroScreen'

const Stack = createNativeStackNavigator();
let logado = false;


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {logado ?
            <Stack.Screen name="Home" component={Rotas} />
            :
            <Stack.Screen name="Login" component={CadastroScreen} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;