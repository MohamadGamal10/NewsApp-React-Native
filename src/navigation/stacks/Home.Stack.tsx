import HomeScreen from "@/src/screens/HomeScreen/HomeScreen";
import SettingScreen from "@/src/screens/Setting/SettingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenNames from "../ScreenNames";


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
            <Stack.Screen name={ScreenNames.SettingScreen} component={SettingScreen} />
            {/* <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticleDetails} /> */}
        </Stack.Navigator>
    )
}
