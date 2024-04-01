// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(null); // Nouvel état pour gérer les erreurs

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://192.168.202.12/app-ressources-relationnelles/web/public/api/connexion/${email}/${password}`);
      if (response.data) {
        // Authentification réussie, naviguer vers l'écran d'accueil
        const userId = response.UTI_ID; // Supposons que la clé soit UTI_ID dans la réponse
        console.log('API Response:', response.data.utilisateur.UTI_ID);
        navigation.navigate('Home', { userId: response.data.utilisateur.UTI_ID }); // Assurez-vous que UTI_ID est correct
        
      } else {
          // Authentification échouée, afficher un message d'erreur à l'utilisateur
          setError('Mail ou mot de passe inconnu, veuillez réessayer.');
      //    console.error('Mail ou mot de passe inconnu, veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'authentification', error);
    }
  };
  
  const handleInscription = () => {
    navigation.navigate('Inscription'); // Naviguer vers la page InscriptionScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Button title="Inscription" onPress={handleInscription} />
      </View>
      {error !== '' && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',  // Affiche les boutons côte à côte
    justifyContent: 'space-between',  // Les boutons occupent l'espace disponible
    width: '50%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 10,
  },
});

export default LoginScreen;
