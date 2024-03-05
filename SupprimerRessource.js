import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SupprimerRessourceScreen = () => {
    const [ressourceId, setRessourceId] = useState('');

    const handleSupprimerRessource = () => {
        // Logique pour supprimer la ressource avec l'ID ressourceId
        console.log('Supprimer la ressource avec l\'ID:', ressourceId);
        // Vous pouvez envoyer la requête de suppression au serveur ici
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrez l'ID de la ressource à supprimer</Text>
            <TextInput
                style={styles.input}
                placeholder="ID de la ressource"
                value={ressourceId}
                onChangeText={setRessourceId}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSupprimerRessource}>
                <Text style={styles.buttonText}>Supprimer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2B9348',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SupprimerRessourceScreen;
