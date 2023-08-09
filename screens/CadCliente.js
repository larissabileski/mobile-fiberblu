import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const Cadastro = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
              <Text style = {styles.text}>Tanque x(5 uni.)</Text>
              <Text style = {styles.text}>Tanque y(3 uni.)</Text>
            <View style= {styles.informacao}>  
              <Text style = {styles.title}>Vendedor:</Text>
            </View>
              <Text style = {styles.text}>Joãozinho do Bairro</Text>
            <View style= {styles.informacao}>  
              <Text style = {styles.title}>Forma de Pagamento</Text>
            </View>
              <Text style = {styles.text}>Boleto</Text>
            <View style= {styles.informacao}>  
              <Text style = {styles.title}>Valor Total</Text>
            </View>
              <Text style = {styles.text}>R$4600,00</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
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
        <Text style={styles.textStyle}>Cassol - 22/04/2023</Text>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Cassol - 22/04/2023</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 15
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 30,
  },
  buttonClose: {
    backgroundColor: '#16a34a',
    width: '100%',
    borderRadius: 10,
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
    textAlign: 'justify',
  },
  title: {
    fontSize: 20,
    backgroundColor: '#fb923c',
    color: 'white',
    paddingLeft: 5
  },
  informacao:{
    width: '100%',
    backgroundColor:'#fb923c'
  }
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
