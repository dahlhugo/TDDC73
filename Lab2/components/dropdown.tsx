/* eslint-disable prettier/prettier */
import React from 'react';
import {  } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export type Props = {
  data: string[];
	buttonText: string;
}

const DropDown = ({data, buttonText = "choose option"}: Props) => {

	return (
		<SelectDropdown data={data} buttonStyle={styles.select} defaultButtonText={buttonText} buttonTextStyle={styles.text}
			onSelect={(selectedItem, index) => {
				console.log(selectedItem, index);
			}} 
			buttonTextAfterSelection={(selectedItem, index) => {
				return selectedItem;
			}}
			rowTextForSelection={(item, index) => {
				return item;
			}}
		/>);
}

const styles = {
	select: {
		flex: 0.3,
		borderRadius: 5,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: 'lightgrey',
  },
	text: {
		fontSize: 12,
	}
}

export default DropDown;
