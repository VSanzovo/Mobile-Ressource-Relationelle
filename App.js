import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import Header from './Header';
import axios from 'axios';
import { useFonts } from 'expo-font';
import { LinkPreview } from '@flyerhq/react-native-link-preview'
import { WebView } from 'react-native-webview';

 // Affichage de la page d'accueil
const HomeScreen = () => {
  const [loaded] = useFonts({
    ComicSansMS3: require('./font/ComicSansMS3.ttf'),
    marianne_bold: require('./font/marianne_bold.otf'),
  });
  
  // Tronqué le contenu du message 
  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...'; 
    }
    return content;
  };

  // Savoir si mon contenu est un lien vers YouTube
  const isYouTubeLink = (text) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    return youtubeRegex.test(text);
  };

  const [premiereRessource, setPremiereRessource] = useState([]);
  const recupererRessources = async () => {
    try {
      const response = await axios.get('http://10.167.128.104/app-ressources-relationnelles/web/public/api/recupererRessources');
      const data = response.data;

      if (data && data.ressources && data.ressources.length > 0) {
        const premieresRessources = data.ressources.slice(0, 6); // Sélectionnez les 6 premières ressources
        setPremiereRessource(premieresRessources);
      }
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de la récupération des ressources', error);
    }
  };

  useEffect(() => {
    recupererRessources();
  }, []); // Le tableau vide signifie que cela s'exécute une seule fois lors du montage du composant

  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View></View>
      <View style={[styles.titleContainer]}>
        <Text style={[styles.titleFirstPart, styles.marianne_bold]}>(RE)</Text>
        <Text style={[styles.titleSecondPart, styles.marianne_bold]}>SOURCES{"\n"}LATIONNELLES</Text>
      </View>
      <Text style={styles.subtitle}>La plateforme pour améliorer vos relations</Text>
      <View style={styles.popularResourcesContainer}>
        <Text style={styles.resourcesTitle}>Ressources Populaires</Text>
      <View style={styles.cardGroup}>
      {premiereRessource.map((ressource, index) => (
    <View key={index} style={styles.card}>
      <Text style={styles.cardTitle}>{ressource.RES_NOM}</Text>
      {isYouTubeLink(ressource.RES_CONTENU) ? (
        // Si le contenu est un lien YouTube, utilisez LinkPreview
        <LinkPreview
          text={ressource.RES_CONTENU}
          visible={false}
          style={{ display: 'none' }}
          onPress={(url) => {
            Linking.openURL(url);
          }}
        />
      ) : (
        // Sinon, affichez le texte tronqué
        <Text style={styles.cardText}>{truncateContent(ressource.RES_CONTENU, 75)}</Text>
      )}
            <Text style={styles.cardCategory}>{ressource.RES_ID} (à modifier)</Text>
          </View>
        ))}
      </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>« Le Projet »</Text>
        <Text style={styles.infoText}>Praesent faucibus, lacus non eleifend rhoncus...</Text>
      </View>
    </ScrollView>
  );
};
<LinkPreview text='This link https://github.com/flyerhq can be extracted from the text' />
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'ComicSansMS3',
    
  },
  titleFirstPart: {
    fontSize: 60,
    color: 'black',
  },
  titleSecondPart: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginTop: 15,
  },
  subtitle: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  popularResourcesContainer: {
    marginBottom: 20,
  },
  resourcesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 10,
  },
  cardGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardCategory: {
    fontSize: 14,
    color: '#0000ff',
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
  },
  comic_sans_ms: {
    fontFamily: 'ComicSansMS3',
  },
  marianne_bold: {
    fontFamily: 'marianne_bold',
  }
});

//recupererRessources();
export default HomeScreen;