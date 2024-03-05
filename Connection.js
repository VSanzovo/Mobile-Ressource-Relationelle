import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Connection = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Vérifie si les champs ne sont pas vides
        if (email !== '' && password !== '') {
            // Appelle la fonction de connexion réussie avec les informations d'email
            onLogin({ email, password });
            Alert.alert('Connexion réussie');
        } else {
            Alert.alert('Veuillez remplir tous les champs');
        }
    };

    return (
        <View>
            <Text>Page de connexion</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 5 }}
            />
            <TextInput
                placeholder="Mot de passe"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 5 }}
            />
            <Button title="Connexion" onPress={handleLogin} />
        </View>
    );
};

export default Connection;