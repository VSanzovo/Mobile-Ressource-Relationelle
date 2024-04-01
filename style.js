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
      color:'white',
      
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
    //   borderColor: 'red',
    //   borderWidth: 1,
    },
    card: {
      width: '48%',
      flexBasis: '48%',
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
        color: 'white',
    },
    account_card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#007EA7',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333333',
        shadowOpacity: 1,
        minWidth: '30%',
        flexBasis: '45%',
        shadowRadius: 10,
        color: 'white',
        minHeight: 200,
        margin: 10,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        
    },
    account_cardcontainer:{
        flexGrow: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        paddingHorizontal:0,
    },
    account_cardcontent:{
        color: '#efefef',
        fontSize: 17,
    },
    account_cardTitle:{
        paddingTop: 5,
        color: 'white',
        fontSize: 25,
    },
    ressource_cardTitle:{
      paddingTop: 5,
      color: 'black',
      fontSize: 20,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 5,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    ressource_cardcontainer:{
    },
    ressource_card:{
      borderRadius: 6,
      elevation: 3,
      backgroundColor: 'white',
      shadowOffset: { width: 1, height: 1},
      shadowColor: '#333333',
      shadowOpacity: 1,
      minWidth: '30%',
      flexBasis: '45%',
      shadowRadius: 10,
      color: 'white',
      minHeight: 200,
      margin: 10,

    },
    link_preview:{
     width:'10%',
    },
  });

  export default styles;