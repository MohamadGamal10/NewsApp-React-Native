import { MainStackParamList } from '@/src/navigation/mainStack';
import ScreenNames from '@/src/navigation/ScreenNames';
import { Entypo } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import useFavStore from '@/src/store/useFavStore';

export default function ArticleDetails() {
    const { goBack } = useNavigation();
    const { params } = useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
    const { article }: any = params ?? {};
    const { title, description, urlToImage, source } = article ?? {};

    const { addToFavList } = useFavStore();

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={goBack}>
                        <Entypo name="chevron-thin-left" size={24} color="red" />
                    </TouchableOpacity>
                </View>
                <Image
                    source={{
                        uri: urlToImage,
                    }}
                    style={styles.coverImg}
                />
                <View style={styles.dataCont}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.addTofavBtn}
                onPress={() => {
                      addToFavList(article);
                }}>
                <Text style={styles.addToFavText}>Add To Fav</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}