import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Home ({navigation}) {
  return  (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Estoque')}><Text style= {{color: '#fff', fontSize: 15}}>Estoque</Text></TouchableOpacity>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Clientes')}><Text style= {{color: '#fff', fontSize: 15}}>Clientes</Text></TouchableOpacity>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Vendas')}><Text style= {{color: '#fff', fontSize: 15}}>Vendas</Text></TouchableOpacity>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Pedido')}><Text style= {{color: '#fff', fontSize: 15}}>Cadastrar Novo Pedido</Text></TouchableOpacity>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#16a34a',
    marginBottom: 30
  },
  TouchableOpacity: {
    alignItems: 'center',
  }
});

export default Home