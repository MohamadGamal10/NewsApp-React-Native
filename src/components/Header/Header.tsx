import { Image } from "expo-image"
import { Text, View } from "react-native"
import { styles } from "./style"

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("@/assets/images/news.png")} />
            <Text style={styles.title}>News App</Text>
            <Image style={styles.img} source={require("@/assets/images/notif.png")} />
        </View>
    )
}

export default Header


