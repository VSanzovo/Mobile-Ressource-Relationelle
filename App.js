import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';

const recupererRessources = async () => {
  try {
      // Remplacez 'URL_DE_VOTRE_API' par l'URL correcte de votre API
     //   const response = await axios.get('api/recupererRessources');
        const response = await axios.get('http://10.167.128.104/app-ressources-relationnelles/web/public/api/recupererRessources');
      // Utilisez les données récupérées ici
      const data = response.data;
      console.log(data);
  } catch (error) {
        if (axios.isAxiosError(error)) {
            // Gestion spécifique des erreurs Axios
            console.error('Erreur Axios', error.message);
            console.log('Détails Axios', error.response);
        } else {
            // Gestion générale des erreurs
            console.error('Erreur inattendue', error);
        }
  }
};

// import CustomFontLoader from './loadFont';

// const CustomFontLoader = () => {
//   const [loaded] = useFonts({
//     ComicSansMS3: require('./font/ComicSansMS3.ttf'),
//   });

//   if (!loaded) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View>
//       <Text style={{ fontFamily: 'ComicSansMS3' }}>Text with custom font</Text>
//     </View>
//   );
// };

const HomeScreen = () => {
  const [loaded] = useFonts({
    ComicSansMS3: require('./font/ComicSansMS3.ttf'),
    marianne_bold: require('./font/marianne_bold.otf'),
  });

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
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Primary card title</Text>
            <Text style={styles.cardText}>Sed quis enim et augue tincidunt porta...</Text>
            <Text style={styles.cardCategory}>Catégorie</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Primary card title</Text>
            <Text style={styles.cardText}>Suspendisse sapien ipsum, vehicula sit amet...</Text>
            <Text style={styles.cardCategory}>Catégorie</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Primary card title</Text>
            <Text style={styles.cardText}>Mauris interdum placerat diam, ut tempus...</Text>
            <Text style={styles.cardCategory}>Catégorie</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Primary card title</Text>
            <Text style={styles.cardText}>Nullam eu dapibus tellus. Pellentesque sit...</Text>
            <Text style={styles.cardCategory}>Catégorie</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Primary card title</Text>
            <Text style={styles.cardText}>Etiam rutrum vestibulum lacus quis...</Text>
            <Text style={styles.cardCategory}>Catégorie</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>« Le Projet »</Text>
        <Text style={styles.infoText}>Praesent faucibus, lacus non eleifend rhoncus...</Text>
      </View>
      <Footer />
    </ScrollView>
  );
};

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

recupererRessources();
export default HomeScreen;
