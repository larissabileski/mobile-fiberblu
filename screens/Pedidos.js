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
            <Text style = {styles.text}>Produtos:</Text>
            <Text style = {styles.text}>Tanque x(5 uni.)</Text>
            <Text style = {styles.text}>Tanque y(3 uni.)</Text>
            <Text style = {styles.text}>Vendedor: Joãozinho do Bairro</Text>
            <Text style = {styles.text}>Forma de Pagamento: Boleto</Text>
            <Text style = {styles.text}>Valor total: R$4600,00</Text>
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
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
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
    padding: 10,
    elevation: 2,
    backgroundColor: '#16a34a',
  },
  buttonClose: {
    backgroundColor: '#16a34a',
    width: '90%',
    borderRadius: 10,
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
    fontSize: 20,
    textAlign: 'justify'
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
