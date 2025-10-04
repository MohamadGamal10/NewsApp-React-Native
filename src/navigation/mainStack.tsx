import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleType } from '../components/types/types';
import ScreenNames from './ScreenNames';
import StackNames from './StackNames';
import AuthStack from './stacks/Auth.Stack';
import SharedStack from './stacks/Shared.Stack';
import MainTabs from './Tabs/MainTabs';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <Stack.Screen name={StackNames.MainTabs} component={MainTabs} />
      <Stack.Screen name={StackNames.SharedStack} component={SharedStack} />
    </Stack.Navigator>
  )
}

export type SharedStackParamList = {
  [ScreenNames.ArticleDetails]: { article: ArticleType };
};

export type MainStackParamList = {
  [StackNames.AuthStack]: undefined;
  [StackNames.MainTabs]: undefined;
  [StackNames.SharedStack]: NavigatorScreenParams<SharedStackParamList>;
};