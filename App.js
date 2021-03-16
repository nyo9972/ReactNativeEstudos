
//Importação de componentes

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ImageBackground} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };







  






  //Corpo do aplicativo
  return (
    
    <ImageBackground style={{flex: 1,}} source={require('./bg.jpg')}>
   <View style={{
     backgroundColor: '#fff0',
   }}>
     <StatusBar hidden={true}></StatusBar>
     <Text style={styles.TextViewerLogin}>Login: </Text>
     <TextInput placeholder="Digite seu E-mail..." style={styles.TextCasesLogin}></TextInput>

     <Text style={styles.TextViewerPassword}>Senha: </Text>
     <TextInput placeholder="Digite sua senha..."  secureTextEntry={true} password={true}  style={styles.TextCasesPassword}></TextInput>
     
     <TouchableOpacity
     onPress={function() {Alert.alert('Login ou senha incorretos...')}} style={styles.BtnEnterCase}><Text style={styles.BtnEnterText}>Enter</Text></TouchableOpacity>
     
   </View>
  </ImageBackground>
  );
};








//Style

const styles = StyleSheet.create({

 TextViewerLogin: {
  color: '#00F9',
  fontSize: 40,
  fontWeight: 'bold',
  marginTop: 150,
  left:140,
  elevation:10,
 },

 TextViewerPassword: {
   color: '#00F9',
  fontSize: 40,
  fontWeight: 'bold',
  left:140,
  elevation:10,
 },

 TextCasesLogin: {
  fontSize: 20,
  marginTop: 10,
  marginBottom: 20,
  borderWidth: 4,
  borderColor:'#00F8',
  borderRadius: 50,
  textAlign: 'center',

 },

 TextCasesPassword: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 20,
  borderWidth: 4,
  borderColor:'#00F8',
  borderRadius: 50,
  textAlign: 'center',
  

 },

 BtnEnterCase: {

  backgroundColor: '#00F8',
  width: 100,
  height:40,
  borderWidth: 4,
  borderColor:'#00F8',
  borderRadius: 50,
  left:150,
  
  
  
 },

 BtnEnterText: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  elevation:15,
  
  
 }

 
 
 
 
 
 
 
 
 
 
 
  /* sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },*/
});

export default App;
