import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import cardStyles from '../style';


export function AccountCard(props){
    return (
        <View style={cardStyles.account_card}>
            <View style = {cardStyles.account_cardcontent}>
                {props.children}
            </View>
        </View>
    )
}

export function RessourceCard(props) {
    return (
        <View style= {cardStyles.ressource_card}>
            <View style = {cardStyles.ressource_cardcontent}>
                {props.children}
            </View>
        </View>
    )
    
}