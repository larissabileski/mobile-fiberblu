import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import { Icon } from "react-native-elements";

const Cadastro = ({ label }) => {
  const [visiblepagamento, setVisiblePagamento] = useState(false);
  const togglePagamento = () => {setVisiblePagamento(!visiblepagamento);};
  const renderPagamento = () => {
    if (visiblepagamento) {
      return (
        <View style={styles.dropdown}>
          {pagamentos.map((pagamento) => (<Text>{pagamento}</Text>))}
        </View>
      );
    }
  };
  const pagamentos = [
    'Boleto',
    'Cheque'
  ]
  const [visiblecliente, setVisibleCliente] = useState(false);
  const toggleCliente = () => {setVisibleCliente(!visiblecliente);};
  const renderCliente = () => {
    if (visiblecliente) {
      return (
        <View style={styles.dropdown}>
          {clientes.map((cliente) => (<Text>{cliente}</Text>))}
        </View>
      );
    }
  };
  const clientes = [
    'Cassol',
    'Milium'
  ]    
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={togglePagamento}>
          {renderPagamento()}
          <Text style={styles.buttonText}>{label}</Text>
          <Icon type="font-awesome" name="chevron-down" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCliente}>
          {renderCliente()}
          <Text style={styles.buttonText}>{label}</Text>
          <Icon type="font-awesome" name="chevron-down" />
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
    marginTop: 30,
  },
  card: {
    width: "90%",
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
    // zIndex: 0
  },
});

export default Cadastro;

