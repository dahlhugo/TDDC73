import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { RepoData, RootStackParamList } from '../utils/types';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({route, navigation}: DetailsProps): JSX.Element => {
  return (
    <View>
      <Text>{route.params.repo.title}</Text>
      <Text>{route.params.repo.description}</Text>
      <View>
        <Text>{route.params.repo.license}</Text>
        <Text>{route.params.repo.commits}</Text>
        <Text>{route.params.repo.title}</Text>
      </View>
      <Button>Back</Button>
    </View>
  );
}

export default DetailsScreen;