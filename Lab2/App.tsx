/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.box}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
  },
});

export default App;
