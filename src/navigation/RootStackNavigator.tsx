import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorParamList from './types';
import LoginScreen from '../domains/login/LoginScreen';
import HomeScreen from '../domains/home/HomeScreen';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
