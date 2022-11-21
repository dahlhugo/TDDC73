
import React from 'react';
import { Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import icon from '../assets/images/arrow-down.png';

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
			renderDropdownIcon={() => {return <Image style={{width: 10, height: 10}} source={icon}/>}}
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
