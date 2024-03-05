import { StyleSheet } from 'react-native';

//STYLES EN CSS ?
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f5f5f5',
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
      fontFamily: 'ComicSansMS3',
      
    },
    titleFirstPart: {
      fontSize: 60,
      color: 'black',
    },
    titleSecondPart: {
      fontSize: 24,
      // fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
      marginTop: 15,
    },
    subtitle: {
      textAlign: 'center',
      fontStyle: 'italic',
      marginBottom: 20,
    },
    popularResourcesContainer: {
      marginBottom: 20,
    },
    resourcesTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000080',
      marginBottom: 10,
    },
    cardGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: '48%',
      backgroundColor: '#ffffff',
      marginBottom: 10,
      padding: 10,
      borderRadius: 5,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    cardText: {
      fontSize: 16,
      marginBottom: 5,
    },
    cardCategory: {
      fontSize: 14,
      color: '#0000ff',
    },
    infoContainer: {
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 5,
      elevation: 2,
    },
    infoTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000080',
      marginBottom: 10,
    },
    infoText: {
      fontSize: 16,
    },
    comic_sans_ms: {
      fontFamily: 'ComicSansMS3',
    },
    marianne_bold: {
      fontFamily: 'marianne_bold',
    },
    onglet: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },


    account:{
        paddingTop: 10,
        marginTop: 10,
    }
  });
  const _couleurPrimaire = '#007EA7';
  const _couleurSecondaire = '#007EA7';

  export default styles;