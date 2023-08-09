import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export default function Estoque () {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Modelo do Tanque" />
        <View style= {styles.informacao}>
          <Text style = {styles.title}>Cor:</Text>
          <Text style = {styles.title}>Valor:</Text>
          <Text style = {styles.title}>Quantidade em estoque:</Text>
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
    width: '90%',
    marginTop: 10,
  },
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});