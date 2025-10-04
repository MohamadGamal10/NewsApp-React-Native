import Header from "@/src/components/Header/Header"
import MainNews from "@/src/components/MainNews/MainNews"
import TopNews from "@/src/components/TopNews/TopNews"
import { ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <MainNews />
                <TopNews />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
