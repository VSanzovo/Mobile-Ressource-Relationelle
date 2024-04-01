import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ProfilScreen = ({ route }) => {
  const userId = route.params?.userId;

  const [userProfile, setUserProfile] = useState(null);
  const [editedProfile, setEditedProfile] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    codePostal: '',
    ville: '',
    telephone: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const recupereInfoUtilisateur = async () => {
    try {
      const response = await axios.get(`http://192.168.202.12/app-ressources-relationnelles/web/public/api/recupererInfoUtilisateur/${userId}/b`);
      if (response.data && response.data.utilisateur) {
        const utilisateur = response.data.utilisateur[0];
        setUserProfile({
          nom: utilisateur.UTI_NOM,
          prenom: utilisateur.UTI_PRENOM,
          adresse: utilisateur.UTI_ADRESSE,
          codePostal: utilisateur.UTI_CP,
          ville: utilisateur.UTI_VILLE,
          email: utilisateur.UTI_MAIL,
          telephone: utilisateur.UTI_NUM_TEL,
        });
        setEditedProfile({
          nom: utilisateur.UTI_NOM,
          prenom: utilisateur.UTI_PRENOM,
          adresse: utilisateur.UTI_ADRESSE,
          codePostal: utilisateur.UTI_CP,
          ville: utilisateur.UTI_VILLE,
          telephone: utilisateur.UTI_NUM_TEL,
        });
      } else {
        setError("Impossible de récupérer les informations de l'utilisateur");
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
      setError('Erreur lors de la récupération des informations utilisateur');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = async () => {
    try {
      let adresseFormatee = editedProfile.adresse.replace(/\s+/g, '-');
      const response = await axios.get(`http://192.168.202.12/app-ressources-relationnelles/web/public/api/modifier_utilisateur/${userId}/${editedProfile.nom}/${editedProfile.prenom}/${adresseFormatee}/${editedProfile.codePostal}/${editedProfile.ville}/${editedProfile.telephone}`);
      if (response.data && response.data.utilisateur)  {
        setSuccessMessage('Profil modifié avec succès !');
        // Actualisez les informations du profil après la modification
        recupereInfoUtilisateur();
      } else {
        setError('Erreur, veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la modification du profil', error);
      setError('Erreur, veuillez réessayer.');
    }
  };

  useEffect(() => {
    recupereInfoUtilisateur();
  }, [userId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gestion du profil</Text>
      {loading ? (
        <Text>Chargement du profil...</Text>
      ) : (
        <>
          {userProfile ? (
            <View style={styles.profileContainer}>
              <Text style={styles.label}>Nom:</Text>
              <TextInput
                style={styles.input}
                value={editedProfile.nom}
                onChangeText={(text) => setEditedProfile({ ...editedProfile, nom: text })}
              />

              <Text style={styles.label}>Prénom:</Text>
              <TextInput
                style={styles.input}
                value={editedProfile.prenom}
                onChangeText={(text) => setEditedProfile({ ...editedProfile, prenom: text })}
              />

              <Text style={styles.label}>Adresse:</Text>
              <TextInput
                style={styles.input}
                value={editedProfile.adresse}
                onChangeText={(text) => setEditedProfile({ ...editedProfile, adresse: text })}
              />

              <Text style={styles.label}>Code Postal:</Text>
              <TextInput
                style={styles.input}
                value={editedProfile.codePostal}
                onChangeText={(text) => setEditedProfile({ ...editedProfile, codePostal: text })}
              />

              <Text style={styles.label}>Ville:</Text>
              <TextInput
                style={styles.input}
                value={editedProfile.ville}
                onChangeText={(text) => setEditedProfile({ ...editedProfile, ville: text })}
              />

              <Text style={styles.label}>Téléphone:</Text>
              <TextInput
                style={styles.input}
                value={editedProfile.telephone}
                onChangeText={(text) => setEditedProfile({ ...editedProfile, telephone: text })}
              />

              <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                <Text style={styles.buttonText}>Valider</Text>
              </TouchableOpacity>

              {successMessage !== '' && <Text style={styles.successMessage}>{successMessage}</Text>}
              {error !== '' && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
          ) : (
            <Text style={styles.error}>{error}</Text>
          )}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 10,
  },
  profileContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    marginTop: 16,
  },
  errorMessage: {
    color: 'red',
    marginTop: 16,
  },
  error: {
    color: 'red',
  },
});

export default ProfilScreen;
