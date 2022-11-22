import React, { useState } from 'react';
import { BackHandler, Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import chip from '../assets/images/chip.png';
import cardFrontImage from '../assets/images/6.jpeg';

import visa from '../assets/images/visa.png';
import dinersclub from '../assets/images/dinersclub.png';
import discover from '../assets/images/discover.png';
import jcb from '../assets/images/jcb.png';
import mastercard from '../assets/images/mastercard.png';
import troy from '../assets/images/troy.png';
import unionpay from '../assets/images/unionpay.png';

type Props = {
  cardNumber: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
};

let compImage: ImageSourcePropType;

const CreditCard = ({cardNumber, name, month, year, cvv}: Props) => {

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
  }

  compImage = handleCompanyImage();

  return (
    <ImageBackground 
      source={cardFrontImage}
      style={styles.card}
      imageStyle={{ borderRadius: 10 }}>
      <View style={styles.imageRow}>
        <Image style={{flex: 0.2, width: undefined, height: undefined, resizeMode: 'contain' }} source={chip} />
        <Image style={{flex: 0.35, width: undefined, height: undefined, resizeMode: 'contain' }} source={compImage} />
      </View>
      <View style={styles.numberWrapper}><Text style={styles.hugeFont}>{cardNumber}</Text></View>
      <View style={styles.inputText}>
        <View style={styles.cardName}>
          <Text style={styles.font}>Card Holder</Text>
          <Text style={styles.bigFont}>{name}</Text> 
        </View>
        <View style={styles.expires}>
          <Text style={styles.font}>Expires</Text>
          <Text style={styles.bigFont}>{month + '/' + ((year !== 'YY') ? year.slice(2) : year)}</Text>
        </View>
      </View>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'SourceCodePro-Regular',
    color: 'lightgrey',
    fontSize: 10,
  },

  bigFont: {
    fontFamily: 'SourceCodePro-Bold',
    color: 'white',
    fontSize: 18,
    marginTop: -4,
  },

  hugeFont: {
    fontFamily: 'SourceCodePro-Bold',
    color: 'white',
    fontSize: 20,
  },

  card: {
    width: 300,
    height: 200,
    borderRadius: 20,
    position: 'absolute',
    top: 30,
    left: 42,
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
    fontFamily: 'SourceCodePro-Regular',  
  },

  imageRow: {
    flex: 1/2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  numberWrapper: {
    flex: 1/4,
    flexDirection: 'row',
    justifyContent:'center',
    width: '80%',
  },

  inputText: {
    flex: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  cardName: {
    flex: 1, 
  },

  expires: {
    flex: 1/2,
  }
});

export default CreditCard;
