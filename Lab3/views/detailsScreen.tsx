import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, Heading } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { RepoData, RootStackParamList } from '../utils/types';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({route, navigation}: DetailsProps): JSX.Element => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <Heading>{route.params.repo.title}</Heading>
      <Text style={{marginTop: 5, marginBottom: 10}}>{route.params.repo.description}</Text>
      <View style={{marginBottom: 10}}>
        <Text>License: {route.params.repo.license}</Text>
        <Text>Stars: {route.params.repo.stars}</Text>
        <Text>Forks: {route.params.repo.forks}</Text>
      </View>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </View>
  );
}

export default DetailsScreen;