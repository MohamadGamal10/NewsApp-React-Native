import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import StackNames from '../../navigation/StackNames';
import {MainStackParamList} from '../../navigation/mainStack';
import styles from './styles';

export default function LoginScreen() {
  const {navigate} =
    useNavigation<NavigationProp<MainStackParamList, StackNames.AuthStack>>();

  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {
    if (userName === 'gemy' && password === 'gemy') {
      navigate(StackNames.MainTabs);
    } else {
      Alert.alert('Invalid username or password');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.note}>if you have an account please login...</Text>
      <View style={styles.formCont}>
        <View style={styles.inputCont}>
          <Text style={styles.label}>username</Text>
          <TextInput
            style={styles.input}
            placeholder="enter your username"
            onChangeText={t => setUsername(t)}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.label}>password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="enter your password"
            onChangeText={p => setPassword(p)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}