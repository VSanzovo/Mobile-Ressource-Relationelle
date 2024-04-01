// SettingsScreen.js

import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity  } from 'react-native';

import styles from './style';
import {AccountCard, RessourceCard} from './elements/card';
import styles_card from './elements/card';
import  Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const SettingsScreen = () => {

  const navigation = useNavigation();

  // On récupère l'userId depuis HomeScreen
  const route = useRoute();
  const userId = route.params?.userId;
  console.log('User ID dans SettingsScreen:', userId);

  const goToProfilScreen = () => {
    // Utiliser la navigation pour aller vers ProfilScreen
    navigation.navigate('Profil', { userId: userId });
  };
  
  return (
    <View>
      <ScrollView contentContainerStyle={styles.account}>
          <View style={styles.account_cardcontainer}>
            <AccountCard>
            <Icons name="settings" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Paramètres</Text>
            <Text style={styles.account_cardcontent}>Permet de modifier les paramètres de l'application</Text>
            </AccountCard>
            
            <AccountCard>
            <TouchableOpacity onPress={goToProfilScreen}>
              <Icons name="person-circle" color={'white'} size={30} />
              <Text style={styles.account_cardTitle}>Profil</Text>
              <Text style={styles.account_cardcontent}>Cliquez pour modifier votre profil</Text>
              </TouchableOpacity>
            </AccountCard>        

            <AccountCard>
            <Icons name="heart" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Favoris</Text>
            <Text style={styles.account_cardcontent}>Affichez vos favoris</Text>
            </AccountCard>

            <AccountCard>
            <Icons name="book" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Ressources</Text>
            <Text style={styles.account_cardcontent}>Affichez vos ressources crées</Text>
            </AccountCard>

            <AccountCard>
            <Icons name="eye" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Ressources suivies</Text>
            <Text style={styles.account_cardcontent}>Affichez vos ressources suivies</Text>
            </AccountCard>
          </View>
      </ScrollView>
    </View>
  );
}
export default SettingsScreen;