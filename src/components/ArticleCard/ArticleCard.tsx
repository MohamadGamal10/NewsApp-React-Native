import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';
import { IProps } from './types';
import styles from './styles';


export default function ArticleCard({ item }: IProps) {
    const { navigate } = useNavigation<any>();

    function gotoArticleDetails() {
        navigate(StackNames.SharedStack, {
            screen: ScreenNames.ArticleDetails,
            params: {
                article: item,
            },
        });
    }

    return (
        <TouchableOpacity style={styles.cardCont} onPress={gotoArticleDetails}>
            <Image style={styles.cardArticelImage} source={{ uri: item.urlToImage }} />
            <Text style={styles.cardArticleName}>{item.title}</Text>
        </TouchableOpacity>
    );
}