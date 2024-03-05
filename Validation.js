import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://your-website.com/register' }} // Remplacez "https://your-website.com/register" par l'URL de votre page contenant l'écran d'inscription
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

export default RegisterScreen;