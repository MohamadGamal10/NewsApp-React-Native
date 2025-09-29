import Header from "@/src/components/Header/Header"
import MainNews from "@/src/components/MainNews/MainNews"
import TopNews from "@/src/components/TopNews/TopNews"
import { View } from "react-native"

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <MainNews />
            <TopNews />
        </View>
    )
}

export default HomeScreen
