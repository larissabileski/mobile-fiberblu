import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export default function Clientes () {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Card style={styles.cardtop}>
        <Card.Title title="Clientes Cadastrados" />
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Empresa Cliente" />
        <View style= {styles.informacao}>
        <Text style = {styles.title}>CNPJ:</Text>
          <Text style = {styles.title}>Endereço:</Text>
          <Text style = {styles.title}>Telefone:</Text>
          <Text style = {styles.title}>Email:</Text>
        </View>
      </Card>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 30,
  },
  card: {
    marginTop: 10,
    width: '90%'
  },
  cardtop: {
    width: '90%'
  },
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
