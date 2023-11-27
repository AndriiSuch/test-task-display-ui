import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {Platform} from 'react-native';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: false,
        animation: Platform.OS === 'ios' ? 'default' : 'fade',
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
