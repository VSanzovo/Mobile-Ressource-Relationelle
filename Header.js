import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

const Header = () => {
  return (
    <View style={styles.header}>
      <WebView
        source={{ uri: 'https://your-website.com/header' }} // Remplacez "https://your-website.com/header" par l'URL de votre page contenant l'en-tête
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000', // Couleur de fond de l'en-tête
  },
});

export default Header;