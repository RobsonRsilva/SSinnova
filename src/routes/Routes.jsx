import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import HistoricoScreen from "../screens/HistoricoScreen";

const Tab = createBottomTabNavigator();
function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Info" component={InfoScreen} />
            <Tab.Screen name="Historico" component={HistoricoScreen} />
        </Tab.Navigator>
    );
}
export default Routes;