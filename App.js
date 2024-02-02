import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import LyricScreen from './src/screens/LyricScreen'


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='LyricScreen' component={LyricScreen} options={{ title: 'Pesquisar'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}