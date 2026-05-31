import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen'
import Ionicons from "@react-native-vector-icons/ionicons";
const Tab = createBottomTabNavigator();
function Rotas() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ size, color }) => {
                let icone_nome;
                if (route.name === 'Home') {
                    icone_nome = 'home';
                } else if (route.name === 'Info') {
                    icone_nome = 'information-circle-sharp';
                } else if (route.name === 'Historico') {
                    icone_nome = 'analytics-sharp';
                }
                return <Ionicons name={icone_nome} size={size} color={color} />
            },
            tabBarStyle:{
           backgroundColor: '#1A3F90',

          },
          tabBarInactiveTintColor : '#AFC2FF',
          tabBarActiveTintColor : '#FFF'
        })}>
            <Tab.Screen options={{headerStyle: {backgroundColor: '#1A3F90'}, headerTintColor: '#FFF', headerTitleAlign: 'center'}} name="Home" component={HomeScreen} />
            <Tab.Screen options={{headerStyle: {backgroundColor: '#1A3F90'}, headerTintColor: '#FFF', headerTitleAlign: 'center', title: 'Informações'}} name="Info" component={HomeScreen} />
            <Tab.Screen options={{tabBarLabel : 'Histórico',headerStyle: {backgroundColor: '#1A3F90'}, headerTintColor: '#FFF', headerTitleAlign: 'center', title: 'Histórico'}} name="Historico" component={HomeScreen} />
        </Tab.Navigator>
    );
}
export default Rotas;