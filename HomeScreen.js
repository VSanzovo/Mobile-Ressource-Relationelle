import React, {useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import axios from 'axios';
import SettingsScreen from './SettingsScreen';
import  MaterialIcons  from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { LinkPreview } from '@flyerhq/react-native-link-preview';

const _couleurPrimaire = '#007EA7';
const _couleurSecondaire = '#007EA7';


//FONCTION PRINCIPALE (PAGE PRINCIPALE)
function HomeScreen() {
  
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
  const [categories, setCategories] = useState([]);
  const recupererRessources = async () => {
    try {
      const response = await axios.get('http://10.167.128.104/app-ressources-relationnelles/web/public/api/recupererRessources');
      const data = response.data;

      if (data && data.ressources && data.ressources.length > 0) {
        const premieresRessources = data.ressources.slice(0, 6); // Sélectionnez les 6 premières ressources
        setPremiereRessource(premieresRessources);
        setCategories(data.categories);
      }
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de la récupération des ressources', error);
    }
  };

  useEffect(() => {
    recupererRessources();
  }, []); // Le tableau vide signifie que cela s'exécute une seule fois lors du montage du composant


    //CHARGEMENT DES POLICES D'ECRITURE
  const [loaded] = useFonts({
    ComicSansMS3: require('./font/ComicSansMS3.ttf'),
    marianne_bold: require('./font/marianne_bold.otf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  const findCategoryById = (categoryId) => {
    return categories.find((category) => category.CAT_ID === categoryId);
  };
  
  return (
    //ICI ON FAIT LA PAGE CLASSIQUE
    <View >

      {/* PAGE SCROLLABLE */}
      {/* ================================ */}
        <ScrollView contentContainerStyle={styles.container}>

      <View></View>
      <View style={[styles.titleContainer]}>
        <Text style={[styles.titleFirstPart, styles.marianne_bold]}>(RE)</Text>
        <Text style={[styles.titleSecondPart, styles.marianne_bold]}>SOURCES{"\n"}LATIONNELLES</Text>
      </View>
      <Text style={styles.subtitle}>La plateforme pour améliorer vos relations</Text>
      <View style={styles.popularResourcesContainer}>
        <Text style={styles.resourcesTitle}>Ressources Populaires</Text>
        <View style={styles.cardGroup}>
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
        <Text style={styles.cardCategory}>
          {findCategoryById(ressource.RES_CAT_ID)?.CAT_NOM}
        </Text>
    </View>
  ))}
</View>
</View>
      </View>
    </ScrollView>
    {/* ================================ */}
    </View>
  );
};

//CONSTANTES DE COULEURS


//BARRE DE NAVIGATION
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: _couleurPrimaire ,
      },
      headerTintColor: '#fff',
     headerTitleStyle:{
      // fontFamily: 'marianne_bold',
      
     },
      headerTitleAlign: 'center',
      tabBarActiveTintColor: _couleurSecondaire,
      tabBarActiveBackgroundColor: 'white', //'#003249', // Couleur du texte des onglets actifs
      // tabBarInactiveTintColor: '#9b9a9b', // Couleur du texte des onglets inactifs
      tabBarStyle: {
        borderRadius: 15,
        backgroundColor: 'white',//'#007EA7', // Couleur de fond de la barre d'onglets
        height: 60,
      },
      tabBarItemStyle:{
        borderRadius: 15,
      },
      
    }} >
      <Tab.Screen name="Accueil" component={HomeScreen} options={{
      tabBarIcon: ({color, size }) => (
        <MaterialIcons name="home-outline" color={color} size={size} />
      ),
    }} />
      <Tab.Screen name="Compte" component={SettingsScreen} options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="person-circle-outline" color={color} size={size} />
      ),
    }} />
    </Tab.Navigator>
  );
}

export default MyTabs;