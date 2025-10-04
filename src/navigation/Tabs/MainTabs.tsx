import FavArticles from '@/src/screens/FavArticles/FavArticles';
import HomeScreen from '@/src/screens/HomeScreen/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenNames from '../ScreenNames';
import StackNames from '../StackNames';
import HomeStack from '../stacks/Home.Stack';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, }}>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray'
                }}
                name={StackNames.HomeStack}
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} />,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray'
                }}
                name={ScreenNames.FavoritesScreen}
                component={FavArticles}
            />
        </Tab.Navigator>
    )
}