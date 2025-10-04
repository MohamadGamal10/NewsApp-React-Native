import ArticleDetails from '@/src/screens/ArticleDetails/ArticleDetails';
import HomeScreen from '@/src/screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import StackNames from './StackNames';
import { ArticleType } from '../components/types/types';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName="Home">
      <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticleDetails} />
    </Stack.Navigator>
  )
}

export type MainStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.ArticleDetails]: { article: ArticleType };
};