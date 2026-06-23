import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import Routes from './src/routes/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createAsyncStorage } from '@react-native-async-storage/async-storage'; 
const storage = createAsyncStorage('SSInnova');
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();
function App() {
// variaveis para receber os dados do localstorage 
const [token, setToken] = useState(null);
const [usuario, setUsuario] = useState(null);
useEffect(() => {
async function buscaDados(){
  try{
  const tokenSalvo = await storage.getItem('token');
  const usuarioSalvo = await storage.getItem('usuario');
  setToken(tokenSalvo);
  setUsuario(usuarioSalvo);
  }catch(erro){
  console.log(erro);
  }
}
buscaDados();
}, []);


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={token ? 'Routes' : 'Login'}>
          <Stack.Screen options={{headerShown: false}} 
          name="Routes" 
          component={Routes} 
          initialParams={{ token: token, usuario: usuario}}
          />
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="Cadastro" component={CadastroScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
export default App;