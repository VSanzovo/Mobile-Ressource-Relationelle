import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'; // Importez le composant Header depuis le fichier Header.js
import Footer from './Footer'; // Importez le composant Footer depuis le fichier Footer.js

const RessourceScreen = () => {
  // Simulez des données de ressource pour les tests
  const ressource = {
    RES_NOM: "Nom de la ressource",
    RES_CONTENU: "Contenu de la ressource",
    RES_DATE_CREATION: "Date de création de la ressource"
  };

  // Simulez des données de commentaires pour les tests
  const commentaireArray = [];

  return (
    <View style={styles.container}>
      {/* Ajoutez le composant Header */}
      <Header />

      <View style={styles.ressourceContainer}>
        {ressource && (
          <View style={styles.ressource}>
            <Text style={styles.title}>{ressource.RES_NOM}</Text>
            <Text>{ressource.RES_CONTENU}</Text>
            <Text>{ressource.RES_DATE_CREATION}</Text>
            <View style={styles.commentaireContainer}>
              {/* Affichez les commentaires ici */}
            </View>
          </View>
        )}

        {/* Affichez une liste de ressources ici */}
      </View>

      {/* Ajoutez le composant Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ressourceContainer: {
    padding: 20,
  },
  ressource: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentaireContainer: {
    marginTop: 10,
  },
});

export default RessourceScreen;