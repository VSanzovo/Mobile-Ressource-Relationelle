import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./media/logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>Plan du site</Text>
        <Text style={styles.link}>Contact</Text>
        <Text style={styles.link}>Mentions légales</Text>
        <Text style={styles.link}>Gestion des données personnelles</Text>
      </View>
      <Text style={styles.copyRight}>&copy; CESI STRASBOURG 2024-2024</Text>
      <Text style={styles.socialIcons}>Icones réseaux sociaux</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000080',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 50,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  link: {
    color: '#ffffff',
  },
  copyRight: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 12,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    paddingTop: 10,
  },
  socialIcons: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 12,
  },
});

export default Footer;