import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://your-website.com/login' }} // Remplacez "https://your-website.com/login" par l'URL de votre page contenant l'écran de connexion
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
