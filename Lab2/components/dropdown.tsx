/* eslint-disable prettier/prettier */
import React from 'react';
import {  } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export type Props = {
  data: string[];
	buttonText: string;	
}

const DropDown: React.FC<Props> = ({data, buttonText = "choose option"}) => {

	return (
		<SelectDropdown data={data} buttonStyle={styles.select} defaultButtonText={buttonText}
			onSelect={(selectedItem, index) => {
				console.log(selectedItem, index);
			}} 
		/>);
}

const styles = {
	select: {
    width: '20%',
  },
}

export default DropDown;