import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Estoque from './screens/Estoque';
import Clientes from './screens/Clientes';
import Vendas from './screens/Vendas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Estoque" component={Estoque} />
          <Stack.Screen name="Clientes" component={Clientes} />
          <Stack.Screen name="Vendas" component={Vendas} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
