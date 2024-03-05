import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styles from '../style';


export default function Card(props){
    return (
        <View style={styles.account_card}>
            <View style = {styles.account_cardcontent}>
                {props.children}
            </View>
        </View>
    )
}

const styles_card = StyleSheet.create({

})