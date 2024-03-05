// SettingsScreen.js

import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import styles from './style';
import Card from './elements/card';

const SettingsScreen = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.account}>
    

          <View>
            <Card>
            <Text>Paramètres</Text>
            </Card>
          </View>
      </ScrollView>
    </View>
  );
}
export default SettingsScreen;