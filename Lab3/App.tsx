/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, PushNotificationIOS, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { TOKEN } from '@env';
import moment from 'moment';
import { NativeBaseProvider, Select } from 'native-base';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/homeScreen';
import DetailsScreen from './views/detailsScreen';
import { RepoData, RootStackParamList } from './utils/types';


const App = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
