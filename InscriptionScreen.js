import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import axios from 'axios';

const InscriptionScreen = () => {
  const [civilite, setCivilite] = useState('Monsieur');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [numTel, setNumTel] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

const handleDateChange = (event, selectedDate) => {
  if (selectedDate && event.type === 'set') {
    setDate(selectedDate);
  }
  setShowDatePicker(false);
};


  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const navigation = useNavigation();

  const handleInscription = async () => {
    try {
        let adresseFormatee = adresse.replace(/\s+/g, '-');

        // Supposez que `dateOfBirth` est votre objet `Date`
        const dateOfBirth = date; // Remplacez ceci par votre objet Date réel

        // Obtenez les composants de la date (jour, mois, année)
        const day = dateOfBirth.getDate();
        const month = dateOfBirth.getMonth() + 1; // Notez que les mois commencent à partir de zéro, donc ajoutez 1
        const year = dateOfBirth.getFullYear();

        // Créez une chaîne de date au format dd-mm-yyyy
        const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

        // Utilisez la variable `formattedDate` comme nécessaire
        console.log('Civilite :', civilite);
        console.log('Nom :', nom);
        console.log('Prénom :', prenom);
        console.log('Date de naissance :', formattedDate);
        console.log('Adresse :', adresseFormatee);
        console.log('Code postal :', codePostal);
        console.log('Ville :', ville);
        console.log('Numéro de téléphone :', numTel);
        console.log('Mail :', email);
        console.log('Mot de passe :', motDePasse);
        console.log('Mot de passe confirmé :', confirmationMotDePasse);
        const response = await axios.get(`http://10.167.128.104/app-ressources-relationnelles/web/public/api/inscription/${civilite}/${nom}/${prenom}/${formattedDate}/${adresseFormatee}/${codePostal}/${ville}/${numTel}/${email}/${motDePasse}/${confirmationMotDePasse}`);
    //    const response = await axios.get('http://10.167.128.104/app-ressources-relationnelles/web/public/api/inscription/Madame/VONVILLE/Clet/07-03-2024/11-rue-du-cdt/67640/Fegersheim/0641243830/clet.vonville@gmail.com/test/test');
        if (response.data && response.data.utilisateur)  {
          navigation.navigate('Home', { userId: response.data.utilisateur.UTI_ID }); // Assurez-vous que UTI_ID est correct
        } else {
          setError('Erreur lors de la création du compte 1, veuillez réessayer.');
        }
      } catch (error) {
        console.error('Erreur lors de la création du compte 2', error);
        setError('Erreur lors de la création du compte 2, veuillez réessayer.');
      }
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Civilité :</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={civilite}
            onValueChange={(itemValue) => setCivilite(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Monsieur" value="Monsieur" />
            <Picker.Item label="Madame" value="Madame" />
            <Picker.Item label="Autre" value="Autre" />
          </Picker>
        </View>
      </View>

      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
      />

      <Text style={styles.label}>Prénom :</Text>
      <TextInput
        style={styles.input}
        value={prenom}
        onChangeText={setPrenom}
      />

      <Text style={styles.label}>Date de naissance :</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.dateInput}
        value={format(date, 'dd/MM/yyyy')}
        editable={false}
      />
        <Button onPress={showDatepicker} title="Sélectionner la date" />
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.label}>Adresse :</Text>
      <TextInput
        style={styles.input}
        value={adresse}
        onChangeText={setAdresse}
      />   
      <Text style={styles.label}>Code postal :</Text>
      <TextInput
        style={styles.input}
        value={codePostal}
        onChangeText={setCodePostal}
      />  
      <Text style={styles.label}>Ville :</Text>
      <TextInput
        style={styles.input}
        value={ville}
        onChangeText={setVille}
      />  
      <Text style={styles.label}>Numéro de téléphone :</Text>
      <TextInput
        style={styles.input}
        value={numTel}
        onChangeText={setNumTel}
      />  
      <Text style={styles.label}>Adresse mail :</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />     
      <Text style={styles.label}>Mot de passe :</Text>
      <TextInput
        style={styles.input}
        value={motDePasse}
        onChangeText={setMotDePasse}
      />      
      <Text style={styles.label}>Confirmer le mot de passe :</Text>
      <TextInput
        style={styles.input}
        value={confirmationMotDePasse}
        onChangeText={setConfirmationMotDePasse}
      /> 
      {/* Autres champs d'inscription */}
      <Button title="Valider" onPress={handleInscription} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 45,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 10,
  },
});

export default InscriptionScreen;