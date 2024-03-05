import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import axios from 'axios';
import SettingsScreen from './vueCompte';
import  MaterialIcons  from 'react-native-vector-icons/Ionicons';
import styles from './style';



//FONCTION PRINCIPALE (PAGE PRINCIPALE)
function HomeScreen() {
  
  //CODE DE FLORIANT JE SAIS PAS CE QU'IL FAIT
  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...'; // Ajoutez des points de suspension pour indiquer que le texte a été tronqué
    }
    return content;
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


    //CHARGEMENT DES POLICES D'ECRITURE
  const [loaded] = useFonts({
    ComicSansMS3: require('./font/ComicSansMS3.ttf'),
    marianne_bold: require('./font/marianne_bold.otf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }
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
        {premiereRessource.map((ressource, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{ressource.RES_NOM}</Text>
            <Text style={styles.cardText}>{truncateContent(ressource.RES_CONTENU, 75)}</Text>
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
    {/* ================================ */}
    </View>
  );
}

//CONSTANTES DE COULEURS
const _couleurPrimaire = '#007EA7';
const _couleurSecondaire = '#007EA7';



//FONCTION QUI VA PERMETTRE D'AFFICHER SUR L'ECRAN
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}


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


