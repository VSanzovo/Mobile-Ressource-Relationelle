// SettingsScreen.js

import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import styles from './style';
import Card from './elements/card';
import styles_card from './elements/card';
import  Icons from 'react-native-vector-icons/Ionicons';
const SettingsScreen = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.account}>
    

          <View style={styles.account_cardcontainer}>
            <Card>
            <Icons name="settings" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Paramètres</Text>
            <Text style={styles.account_cardcontent}>Permet de modifier les paramètres de l'application</Text>
            </Card>

            <Card>
            <Icons name="person-circle" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Profil</Text>
            <Text style={styles.account_cardcontent}>Cliquez pour modifier votre profil</Text>
            </Card>

            <Card>
            <Icons name="heart" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Favoris</Text>
            <Text style={styles.account_cardcontent}>Affichez vos favoris</Text>
            </Card>

            <Card>
            <Icons name="book" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Ressources</Text>
            <Text style={styles.account_cardcontent}>Affichez vos ressources crées</Text>
            </Card>

            <Card>
            <Icons name="eye" color={'white'} size={30} />
            <Text style={styles.account_cardTitle}>Ressources suivies</Text>
            <Text style={styles.account_cardcontent}>Affichez vos ressources suivies</Text>
            </Card>
          </View>
      </ScrollView>
    </View>
  );
}
export default SettingsScreen;