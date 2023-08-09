import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import { Icon } from "react-native-elements";

const Clientes = ({ label }) => {
  const [visiblecliente, setVisibleCliente] = useState(false);
  const toggleCliente = () => {setVisibleCliente(!visibleCliente);};
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
    'Boleto',
    'Cheque'
  ]
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Cadastrar Novo Cliente" />
        <TouchableOpacity style={styles.button} onPress={toggleCliente}>
          {renderCliente()}
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

export default Clientes;