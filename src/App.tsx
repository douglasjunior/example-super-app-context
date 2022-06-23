import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {AppProvider} from '../lib';
import RootStackNavigator from './navigation/RootStackNavigator';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  context: {
    flex: 1,
  },
});

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea}>
          <RootStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
