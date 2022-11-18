/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DropDown from './components/dropdown';

const years = [
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
  '2030',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const cardFrontImage = require('./assets/images/6.jpeg');

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground source={cardFrontImage} style={styles.card} imageStyle={{ borderRadius: 10 }}>

      </ImageBackground>
      <View style={styles.inputFields}>
        <Text style={styles.inputTitle}>Card Number</Text>
        <TextInput style={styles.inputField}></TextInput>
        <Text style={styles.inputTitle}>Card Name</Text>
        <TextInput style={styles.inputField}></TextInput>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={styles.inputTitle}>Expiration Date</Text>
          </View>
          <View style={styles.selectorRow}>
            <DropDown data={months} buttonText="month" />
            <DropDown data={years} buttonText="year" />
            <TextInput style={styles.smallInput}></TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  inputFields: {
    alignItems: 'center',
    width: 350,
    height: 400,
    marginTop: -30,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    paddingTop: 70,
  },

  card: {
    width: 300,
    height: 200,
    borderRadius: 20,
    position: 'absolute',
    top: 50,
    left: 42,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
  },

  inputField: {
    borderRadius: 5,
    width: '80%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'black',
    fontSize: 16,
  },

  smallInput: {
    borderRadius: 5,
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'black',
    fontSize: 16,
    marginLeft: 20,
  },

  inputTitle: {
    marginTop: 20,
    marginLeft: 37,
    color: 'black',
    alignSelf: 'flex-start',
  },

  selectorRow: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
