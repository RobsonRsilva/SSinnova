import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import HistoricoScreen from "../screens/HistoricoScreen";
import Ionicons from "@react-native-vector-icons/ionicons/static";
const Tab = createBottomTabNavigator();
function Routes() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ size, color }) => {
                let icone_nome;
                if (route.name === 'Home') {
                    icone_nome = 'home';
                } else if (route.name === 'Info') {
                    icone_nome = 'information-circle';
                } else if (route.name === 'Historico') {
                    icone_nome = 'analytics';
                }
              return <Ionicons name={icone_nome} size={size} color={color} />
            },
            tabBarStyle: { backgroundColor: '#1D439B' },
            tabBarActiveTintColor: '#7a9cf3',
            tabBarInactiveTintColor: '#FFF'
        })}>
            <Tab.Screen options={{headerStyle: {backgroundColor: '#1D439B'}, headerTintColor : '#FFF' }} name="Home" component={HomeScreen} />
            <Tab.Screen name="Info" component={InfoScreen} />
            <Tab.Screen name="Historico" component={HistoricoScreen} />
        </Tab.Navigator>
    );
}
export default Routes;