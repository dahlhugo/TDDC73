/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => (
  <View style={styles.mainContent}>
    <Image style={styles.image} source={require('./images/augieCircle.png')} />
    <View style={styles.buttonStyles}>
      <Button title="BUTTON" />
      <Button title="BUTTON" />
    </View>
    <View style={styles.buttonStyles}>
      <Button title="BUTTON" />
      <Button title="BUTTON" />
    </View>
    <View style={styles.emailStyles}>
      <Text style={{marginRight: 60}}>Email</Text>
      <TextInput style={{width: 200}} underlineColorAndroid={'black'}/>
    </View>
    
    
  </View>
);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },

  buttonStyles: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  emailStyles: {
    paddingLeft: 10,
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
