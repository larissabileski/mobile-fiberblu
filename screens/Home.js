import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Home ({navigation}) {
  return  (
    <ScrollView style={styles.scrollView}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Clientes')}><MaterialCommunityIcons name='account' color={'white'} size={80}/></TouchableOpacity>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('CadCliente')}><MaterialCommunityIcons name='account-multiple-plus' color={'white'} size={80}/></TouchableOpacity>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Estoque')}><MaterialCommunityIcons name='package' color={'white'} size={80}/></TouchableOpacity>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Pedidos')}><MaterialCommunityIcons name='note-text' color={'white'} size={80}/></TouchableOpacity>
          </Card.Content>
        </Card>
        <Card style={styles.cardpedido}>
          <Card.Content>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Cadastro')}><MaterialCommunityIcons name='plus-box-multiple' color={'white'} size={80}/></TouchableOpacity>
          </Card.Content>
        </Card>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,

  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 30,
  },
  card: {
    width: '45%',
    height: 250,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#16a34a',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15
  },
  cardpedido: {
    width: '95%',
    height: 250,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#16a34a',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15
  },
  TouchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 275,
    width: '100%'
  }
});

export default Home