import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const AjouterRessourceScreen = () => {
  return (
    <View style={styles.container}>

      <WebView
        source={{ uri: 'https://your-website.com/ajouterRessource' }} // Remplacez "https://your-website.com/ajouterRessource" par l'URL de votre page contenant le formulaire d'ajout de ressource
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

export default AjouterRessourceScreen;
