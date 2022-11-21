import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import CreditCard from './components/creditcard';
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



const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <CreditCard/>
      <View style={styles.inputFields}>
        <Text style={styles.inputTitle}>Card Number</Text>
        <TextInput style={styles.inputField}></TextInput>
        <Text style={styles.inputTitle}>Card Name</Text>
        <TextInput style={styles.inputField}></TextInput>
        <View style={{ flexDirection: 'column', width: '80%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={styles.dropdownTitle}>Expiration Date</Text>
            <Text style={styles.smallInputTitle}>CVV</Text>
          </View>
          <View style={styles.selectorRow}>
            <DropDown data={months} buttonText="month" />
            <DropDown data={years} buttonText="year" />
            <TextInput style={styles.smallInput}></TextInput>
          </View>
          <Button
            onPress={() => {
              return this;
            }}
            title="Submit"
            accessibilityLabel="Submit info"
            
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

  smallInputTitle: {
    marginTop: 10,
    color: 'black',
    flex: 1,
    marginLeft: 60,
  },

  inputTitle: {
    marginTop: 10,
    marginLeft: 37,
    color: 'black',
    alignSelf: 'flex-start',
  },

  dropdownTitle: {
    marginTop: 10,
    color: 'black',
    alignSelf: 'flex-start',
    flex: 2,
  },

  selectorRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default App;
