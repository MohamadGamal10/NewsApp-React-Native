import ArticleCard from '@/src/components/ArticleCard/ArticleCard';
import { ArticleType } from '@/src/components/types/types';
import useFavStore from '@/src/store/useFavStore';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function FavArticles() {
    const { favList, removeFromFavList } = useFavStore();

    function renderItem(item: ArticleType) {
        return (
            <>
                <ArticleCard item={item} />
                <TouchableOpacity onPress={() => removeFromFavList(item.title)}>
                    <Ionicons name="trash" size={24} color={"red"} />
                </TouchableOpacity>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favourt Articles</Text>
            <FlatList data={favList} renderItem={({ item }) => renderItem(item)} />
        </View>
    )
}