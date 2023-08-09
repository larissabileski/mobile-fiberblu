import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
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
  const [visibleproduto, setVisibleProduto] = useState(false);
  const toggleProduto = () => {setVisibleProduto(!visibleproduto);};
  const renderProduto = () => {
    if (visibleproduto) {
      return (
        <View style={styles.dropdown}>
          {produtos.map((produto) => (<Text>{produto}</Text>))}
        </View>
      );
    }
  };
  const produtos = [
    'Tanque A -  Preto',
    'Tanque A - Branco',
    'Tanque A - Bege',
    'Tanque B -  Preto',
    'Tanque B - Branco',
    'Tanque B - Bege',
  ]    
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Cadastrar Novo Pedido" />
        <TouchableOpacity style={styles.button} onPress={toggleCliente}>
          {renderCliente()}
          <Text style={styles.buttonText}>{label}</Text>
          <Icon type="font-awesome" name="chevron-down" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleProduto}>
          {renderProduto()}
          <Text style={styles.buttonText}>{label}</Text>
          <Icon type="font-awesome" name="chevron-down" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={togglePagamento}>
          {renderPagamento()}
          <Text style={styles.buttonText}>{label}</Text>
          <Icon type="font-awesome" name="chevron-down" />
        </TouchableOpacity>
      </Card>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
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
    height: 1000,
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 100,
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

