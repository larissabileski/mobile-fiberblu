import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export default function Pedidos () {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style = {{backgroundColor: "green", fontSize: 24, color: "white", paddingLeft: 5}}>Cassol - 22/04/23</Text>
        <Text style = {{fontSize: 16, paddingTop: 4, paddingLeft: 5}}>Produtos: Tanque x(5 uni.), Tanque y(3 uni.)</Text>
        <Text style = {{fontSize: 16, paddingTop: 4, paddingLeft: 5}}>Vendedor: Joãozinho do Bairro</Text>
        <Text style = {{fontSize: 16, paddingTop: 4, paddingLeft: 5}}>Valor: R$4600,00</Text>
        <Text style = {{fontSize: 16, paddingTop: 4, paddingLeft: 5}}>Forma de Pagamento: Boleto</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  }
});