import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CadCliente = ({ label }) => {
  const [empresa, onChangeEmpresa] = React.useState("");
  const [cnpj, onChangeCNPJ] = React.useState("");
  const [endereco, onChangeEndereco] = React.useState("");
  const [telefone, onChangeTelefone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Cadastrar Novo Cliente" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmpresa}
            placeholder="Nome da Empresa"
            value={empresa}
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCNPJ}
            value={cnpj}
            placeholder="CNPJ"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEndereco}
            placeholder="Endereço"
            value={endereco}
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTelefone}
            placeholder="Telefone"
            value={telefone}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            placeholder="Email"
            value={email}
            keyboardType="text"
          />
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.TextTouchableOpacity}>Cadastrar</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
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
    height: 800,
  },
  TouchableOpacity: {
    width: "80%",
    borderRadius: 30,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#15803d",
  },
  TextTouchableOpacity: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CadCliente;
