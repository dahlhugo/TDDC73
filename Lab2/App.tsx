import React, { useRef, useState } from 'react';
import {
  Button, SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import FlipCard from 'react-native-flip-card-plus';

import CreditCardFront from './components/creditcardfront';
import CreditCardBack from './components/creditcardback';
import DropDown from './components/dropdown';

import visa from './assets/images/visa.png';
import dinersclub from './assets/images/dinersclub.png';
import discover from './assets/images/discover.png';
import jcb from './assets/images/jcb.png';
import mastercard from './assets/images/mastercard.png';
import troy from './assets/images/troy.png';
import unionpay from './assets/images/unionpay.png';




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
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

let isFlipped = false;


const App = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('');
  const [month, setMonth] = useState('MM');
  const [year, setYear] = useState('YY');
  const [cvv, setCvv] = useState("");
  const card: FlipCard = useRef(null);

  

  const handleFlipFront = () =>{
    if(card.current !== null && isFlipped) {
      card.current.flipHorizontal();
      isFlipped = false;
    }
  };

  const handleFlipBack = () =>{
    if(card.current !== null && !isFlipped) {
      card.current.flipHorizontal();
      isFlipped = true;
    }
  };

  const handleCompanyImage = () => {
    if(cardNumber[0] === '3' && cardNumber[1] === '5') {
      return jcb;
    }
    else if(cardNumber[0] === '3'){
      return dinersclub;
    }
    else if(cardNumber[0] === '4') {
      return visa;
    }
    else if(cardNumber[0] === '5') {
      return mastercard;
    }
    else if(cardNumber[0] === '6' && cardNumber[1] === '2'){
      return unionpay; 
    }
    else if(cardNumber[0] === '6' && cardNumber[1] === '5'){
      return troy; 
    }
    else {
      return discover;
    }
  };
  
  const handleNameChange = (text: string) => {
    const result = text.replace(/[^a-z -]/gi, '');
    setName(result);
  }

  const handleCardNumberChange = (text: string) => {
    let result = text.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(result);
  }

  return (
    <SafeAreaView style={styles.main}>
      <FlipCard ref={card} flipDirection={"h"} style={styles.flipCard}>
        <CreditCardFront cardNumber={cardNumber} name={name} month={month} year={year} handleCompanyImage={handleCompanyImage}/>
        <CreditCardBack cvv={cvv} handleCardCompany={handleCompanyImage}/>
      </FlipCard>
      
      <View style={styles.inputFields}>
        <Text style={styles.inputTitle}>Card Number</Text>
        <TextInput value={cardNumber} keyboardType='number-pad' maxLength={16} onChangeText={(text) => handleCardNumberChange(text)} onFocus={handleFlipFront} style={styles.inputField}></TextInput>
        <Text style={styles.inputTitle}>Card Name</Text>
        <TextInput value={name} onChangeText={text => handleNameChange(text)} style={styles.inputField} onFocus={handleFlipFront}></TextInput>
        <View style={{ flexDirection: 'column', width: '80%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={styles.dropdownTitle}>Expiration Date</Text>
            <Text style={styles.smallInputTitle}>CVV</Text>
          </View>
          <View style={styles.selectorRow}>
            <DropDown data={months} buttonText="month" onSelectItem={(selectedItem) => setMonth(selectedItem)} onFocus={handleFlipFront}/>
            <DropDown data={years} buttonText="year" onSelectItem={(selectedItem) => setYear(selectedItem)} onFocus={handleFlipFront}/>
            <TextInput maxLength={3} onFocus={() => handleFlipBack()} onChangeText={(text) => setCvv(text)} style={styles.smallInput} keyboardType='numeric'></TextInput>
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

  flipCard: {
    width: 300,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    left: 42,

  },

});

export default App;
