import React, { useState } from 'react';
import { BackHandler, Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import cardImage from '../assets/images/6.jpeg';

type Props = {
  handleCardCompany: () => ImageSourcePropType;
  cvv: string;
};

let compImage: ImageSourcePropType;

const CreditCardBack = ({handleCardCompany, cvv}: Props) => {
  
  compImage = handleCardCompany();


  return (
    <ImageBackground 
      source={cardImage}
      style={styles.card}
      imageStyle={{ borderRadius: 10 }}>
			<View style={styles.bar}></View>
      <Text style={styles.cvvTitle}>CVV</Text>
      <View style={styles.whiteBar}> 
				<Text style={styles.cvv}>{cvv}</Text>
      </View>
      <Image style={styles.companyImage} source={compImage} />
    </ImageBackground>
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
  },

  bar: {
    width: '100%',
    height: 40,
    marginTop: -10,
    backgroundColor: 'black',
  },
  whiteBar: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },

  companyImage: {
    alignSelf: 'flex-end', 
    flex: 0.3, 
    width: 100, 
    height: undefined, 
    resizeMode: 'contain',
		marginRight: 20, 
    marginTop: 20
  },

  cvvTitle: {
		color: 'white',
    alignSelf: 'flex-end', 
    marginRight: 20, 
    marginTop: 10
  },
	cvv: {
		alignSelf: 'flex-end',
		color: 'black',
		marginRight: 10, 
	}
});

export default CreditCardBack;
