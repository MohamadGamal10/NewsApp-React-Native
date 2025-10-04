import LoginScreen from '@/src/screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../ScreenNames';


const Stack = createNativeStackNavigator();


export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
        </Stack.Navigator>
    )
}