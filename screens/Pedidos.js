import React, {useState, useEffect} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';
import { Card, DefaultTheme } from 'react-native-paper';
import pedidoService from '../src/services/pedidos';

const Cadastro = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pedidos, setPedidos] = useState([]);

  async function fetchPedidos() {
    const data = await pedidoService.getAllPedidos()
    setPedidos(data)
  }

  useEffect(() => {
    fetchPedidos()
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.Card}>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style= {styles.informacao}>
              <Text style = {styles.title}>Produtos:</Text>
            </View>
            <View style= {styles.informacao}>  
              <Text style = {styles.title}>Representante:</Text> 
            </View>
            <Text style = {styles.text}>{pedidos.map((pedido) => (
                 <Text key={pedido.representante}></Text>
              ))} </Text>
            <View style= {styles.informacao}>  
              <Text style = {styles.title}>Pagamento:</Text>
            </View>
              <Text style = {styles.text}>Forma de pagamento listado na compra</Text>
            <View style= {styles.informacao}>  
              <Text style = {styles.title}>Valor Total:</Text>
            </View>
              <Text style = {styles.text}>Valor da compra</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {pedidos.map(pedido => (
        <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>{pedido.empresa} - {pedido.data}</Text>
        </Pressable>
      ))}

      {/* } */}
      {/* <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Cassol - 22/04/2023</Text>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Cassol - 22/04/2023</Text>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Cassol - 22/04/2023
      </Text>
      </Pressable> */}
    </View>
      </Card>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  centeredView: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 30,
  },
  button: {
    marginTop:10,
    marginHorizontal: 20,
    padding: 20,
    elevation: 2,
    backgroundColor: '#16a34a',
    alignItems: 'center'
  },
  buttonClose: {
    backgroundColor: '#16a34a',
    width: '100%',
    borderRadius: 30,
    marginTop: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
  },
  title: {
    fontSize: 18,
    paddingLeft: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  informacao:{
    width: '100%',
  },
});

export default Cadastro;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: DefaultTheme.colors.background,
//     alignItems: 'center',
//     paddingTop: 10
//   },
