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
        <View style={styles.selectorRow}>
        <SelectDropdown
            data={years}
            buttonStyle={styles.select}
            defaultButtonText="Month"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <SelectDropdown
            data={years}
            buttonStyle={styles.select}
            defaultButtonText="Year"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
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

  inputTitle: {
    marginTop: 20,
    marginLeft: 37,
    color: 'black',
    alignSelf: 'flex-start',
  },

  selectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    width: '20%',
  },
});

export default App;
