import axios from 'axios';
import React, { useEffect } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import styles from './style';

const news = [
    {
        id: 1,
        title: 'news 1 title',
        source: 'source 1',
        image:
            'https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg',
    },
    {
        id: 2,
        title: 'news 2 title',
        source: 'source 2',
        image:
            'https://t4.ftcdn.net/jpg/02/18/86/55/240_F_218865580_c4Pgu6dHHNOJlU9jX61DisF0ZR8GVfcx.jpg',
    },
    {
        id: 3,
        title: 'news 2 title',
        source: 'source 3',
        image:
            'https://t4.ftcdn.net/jpg/02/55/45/55/240_F_255455531_KFMH5soxYp8rqCNYp0plHFC7OBWPOiOY.jpg',
    },
];


export default function MainNews() {
    const [news, setNews] = React.useState([]);
    function getTopNews() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffe5d6a4d50847379cfe4a3675fb4724";
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                const articles = response.data?.articles.filter((article: any) => article.urlToImage !== null);
                setNews(articles);
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getTopNews();
    }, [])

    function renderNews(item: any) {
        return (
            <ImageBackground
                source={{
                    uri: item.urlToImage,
                }}
                style={styles.container}
                resizeMode="cover">
                <View style={styles.whiteCont}>
                    <View style={styles.redCont}>
                        <Text style={styles.deadlineText}>{item.source.name}</Text>
                    </View>
                    <Text style={styles.name}>{item.title}</Text>
                </View>
            </ImageBackground>
        );
    }
    return (
        <View>
            <FlatList
                data={news}
                renderItem={({ item }) => renderNews(item)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}