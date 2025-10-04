import { MainStackParamList } from '@/src/navigation/mainStack';
import ScreenNames from '@/src/navigation/ScreenNames';
import { get } from '@/src/utils/helpers/apiService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ArticleType } from '../types/types';
import styles from './styles';
import StackNames from '@/src/navigation/StackNames';

export default function TopNews() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();

  useEffect(() => {
    const url = "/everything?q=egypt";
    get(url)
      .then((response) => {
        // console.log(response.data);
        const articles = response.data?.articles.filter((article: ArticleType) => article.urlToImage !== null);
        setArticles(articles);
      }).catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top News</Text>

      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={
            () => navigate(StackNames.SharedStack,
              {
                screen: ScreenNames.ArticleDetails,
                params: { article: item }
              }
            )} style={styles.cardCount}>
            <Image style={styles.cardArticleImage} source={{ uri: item.urlToImage }} />
            <Text style={styles.cardArticleName}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.listCont}
      />
    </View>
  )
}