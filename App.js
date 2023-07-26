import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Estoque from './screens/Estoque';
import Clientes from './screens/Clientes';
import Pedidos from './screens/Pedidos';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import CadCliente from './screens/CadCliente';

 
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
    headerShown: false
  }}
>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Estoque" component={Estoque} />
          <Stack.Screen name="Clientes" component={Clientes} />
          <Stack.Screen name="Pedidos" component={Pedidos} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="CadCliente" component={CadCliente} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
