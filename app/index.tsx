import MainStack from "@/src/navigation/mainStack";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { useFonts } from "expo-font";




export default function Index() {

  useFonts({
    CairoRegular: require("../assets/fonts/Cairo-Regular.ttf"),
    CairoBold: require("../assets/fonts/Cairo-Bold.ttf"),
  });
  
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
