import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenNames from "../ScreenNames";
import ArticleDetails from "@/src/screens/ArticleDetails/ArticleDetails";


const Stack = createNativeStackNavigator();


export default function SharedStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticleDetails} />
        </Stack.Navigator>
    )
}