import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import chip from '../assets/images/chip.png';
import cardFrontImage from '../assets/images/6.jpeg';
import visa from '../assets/images/visa.png';

type Props = {};

const CreditCard = ({ }: Props) => {
  return (
    <ImageBackground
      source={cardFrontImage}
      style={styles.card}
      imageStyle={{ borderRadius: 10 }}>
      <View style={styles.imageRow}>
        <Image style={{flex: 0.3, width: undefined, height: undefined, resizeMode: 'contain' }} source={chip} />
        <Image style={{flex: 0.3, width: undefined, height: undefined, resizeMode: 'contain' }} source={visa} />
      </View>
      <View style={styles.numberWrapper}><Text>1111 2343 3890 4392</Text></View>
      <View></View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },

  imageRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  numberWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '80%',
  },
});

export default CreditCard;
