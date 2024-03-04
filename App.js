// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Footer from './Footer';
// import Header from './Header';

// import BottomTabNavigator from './onglet';
// // import CustomFontLoader from './loadFont';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const HomeScreen = () => {
//   const [loaded] = useFonts({
//     ComicSansMS3: require('./font/ComicSansMS3.ttf'),
//     marianne_bold: require('./font/marianne_bold.otf'),
//   });

//   if (!loaded) {
//     return <Text>Loading...</Text>;
//   }
//   return (

//     <View >

//     <ScrollView contentContainerStyle={styles.container}>
//       <Header />

//       <View></View>
//       <View style={[styles.titleContainer]}>
//         <Text style={[styles.titleFirstPart, styles.marianne_bold]}>(RE)</Text>
//         <Text style={[styles.titleSecondPart, styles.marianne_bold]}>SOURCES{"\n"}LATIONNELLES</Text>
//       </View>
//       <Text style={styles.subtitle}>La plateforme pour améliorer vos relations</Text>
//       <View style={styles.popularResourcesContainer}>
//         <Text style={styles.resourcesTitle}>Ressources Populaires</Text>
//         <View style={styles.cardGroup}>
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Primary card title</Text>
//             <Text style={styles.cardText}>Sed quis enim et augue tincidunt porta...</Text>
//             <Text style={styles.cardCategory}>Catégorie</Text>
//           </View>
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Primary card title</Text>
//             <Text style={styles.cardText}>Suspendisse sapien ipsum, vehicula sit amet...</Text>
//             <Text style={styles.cardCategory}>Catégorie</Text>
//           </View>
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Primary card title</Text>
//             <Text style={styles.cardText}>Mauris interdum placerat diam, ut tempus...</Text>
//             <Text style={styles.cardCategory}>Catégorie</Text>
//           </View>
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Primary card title</Text>
//             <Text style={styles.cardText}>Nullam eu dapibus tellus. Pellentesque sit...</Text>
//             <Text style={styles.cardCategory}>Catégorie</Text>
//           </View>
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Primary card title</Text>
//             <Text style={styles.cardText}>Etiam rutrum vestibulum lacus quis...</Text>
//             <Text style={styles.cardCategory}>Catégorie</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoTitle}>« Le Projet »</Text>
//         <Text style={styles.infoText}>Praesent faucibus, lacus non eleifend rhoncus...</Text>
//       </View>
//       {/* <Footer /> */}

//     </ScrollView>

//     <NavigationContainer >
//     <BottomTabNavigator style={styles.onglet} />
//   </NavigationContainer>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#f5f5f5',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     fontFamily: 'ComicSansMS3',
    
//   },
//   titleFirstPart: {
//     fontSize: 60,
//     color: 'black',
//   },
//   titleSecondPart: {
//     fontSize: 24,
//     // fontWeight: 'bold',
//     color: 'black',
//     marginLeft: 10,
//     marginTop: 15,
//   },
//   subtitle: {
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 20,
//   },
//   popularResourcesContainer: {
//     marginBottom: 20,
//   },
//   resourcesTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000080',
//     marginBottom: 10,
//   },
//   cardGroup: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   card: {
//     width: '48%',
//     backgroundColor: '#ffffff',
//     marginBottom: 10,
//     padding: 10,
//     borderRadius: 5,
//     elevation: 2,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   cardText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   cardCategory: {
//     fontSize: 14,
//     color: '#0000ff',
//   },
//   infoContainer: {
//     backgroundColor: '#ffffff',
//     padding: 10,
//     borderRadius: 5,
//     elevation: 2,
//   },
//   infoTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000080',
//     marginBottom: 10,
//   },
//   infoText: {
//     fontSize: 16,
//   },
//   comic_sans_ms: {
//     fontFamily: 'ComicSansMS3',
//   },
//   marianne_bold: {
//     fontFamily: 'marianne_bold',
//   },
//   onglet: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   }
// });

// export default HomeScreen;


import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';


function HomeScreen() {

  // Chargement des fonts
  const [loaded] = useFonts({
    ComicSansMS3: require('./font/ComicSansMS3.ttf'),
    marianne_bold: require('./font/marianne_bold.otf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }



  return (
    //ICI ON FAIT LA PAGE WEB
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
    </ScrollView>
    {/* ================================ */}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



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
  },
  onglet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});