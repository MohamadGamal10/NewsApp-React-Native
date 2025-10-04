import ScreenNames from "@/src/navigation/ScreenNames";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Header = () => {
    const { navigate } = useNavigation();

    const handleGoToSetting = () => {
        navigate(ScreenNames.SettingScreen);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoToSetting}>
                <Image style={styles.img} source={require("@/assets/images/news.png")} />
            </TouchableOpacity>
            <Text style={styles.title}>News App</Text>
            <Image style={styles.img} source={require("@/assets/images/notif.png")} />
        </View>
    )
}

export default Header


