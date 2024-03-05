import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styles from '../style';

export default function Card(props){
    return (
        <View style={styles_card.card}>
            <View style = {styles_card.cardcontent}>
                {props.children}
            </View>
        </View>
    )
}

const styles_card = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#007EA7',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        minHeight: 100,
        maxHeight: 200,
        shadowRadius: 2,
    },
    cardcontent:{
        marginHorizontal: 18,
        marginVertical: 10,
    }
})