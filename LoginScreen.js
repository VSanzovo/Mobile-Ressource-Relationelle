// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://10.167.128.104/app-ressources-relationnelles/web/public/api/connexion/${email}/${password}`);
      if (response.data) {
        // Authentification réussie, naviguer vers l'écran d'accueil
        const userId = response.data.UTI_ID; // Supposons que la clé soit UTI_ID dans la réponse
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              params: { userId }, // Passer l'identifiant comme paramètre
            },
          ],
        });
      } else {
        // Authentification échouée, afficher un message d'erreur
        console.log('Erreur d\'authentification');
      }
    } catch (error) {
      console.error('Erreur lors de l\'authentification', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Connexion à l'application Food Seeker</Text>
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
      <Button title="Login" onPress={handleLogin} />
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
});

export default LoginScreen;
