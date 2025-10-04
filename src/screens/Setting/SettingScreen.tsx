import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import StackNames from '../../navigation/StackNames';

export default function SettingScreen() {
  const {navigate,reset} = useNavigation();

  function handleLogout() {
    // navigate(StackNames.AuthStack);
    reset({

      index: 0,
      routes: [
        {
          name: StackNames.AuthStack,
        },
      ],
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}