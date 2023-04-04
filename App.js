import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Romance from './screens/Romance';
import Terror from './screens/Terror';
import Drama from './screens/Drama';
import Infantil from './screens/Infantil'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Romance" component={Romance} />
          <Stack.Screen name="Drama" component={Drama} />
          <Stack.Screen name="Terror" component={Terror} />
          <Stack.Screen name="Infantil" component={Infantil} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
