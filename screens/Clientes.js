import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import empresaService from '../src/services/empresa';

const [empresas, setEmpresas] = useState([])

async function fetchEmpresas(){
  const data = await empresaService.getAllEmpresa();
  setEmpresas(data)
}

useEffect(() => {
  fetchEmpresas();
})


export default function Clientes() {
  return (
    <ScrollView style={styles.scrollView}>
      {empresas.map((empresa) => (
        <View style={styles.container}>
        <Card style={styles.cardtop}>
          <Card.Title title="Empresas Cadastrados" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Empresa Cliente" />
          <View style={styles.informacao}>
            <Text style={styles.title}>CNPJ:{empresa.cnpj}</Text>
            <Text style={styles.title}>Endereço:{empresa.endereco}</Text>
            <Text style={styles.title}>Telefone:{empresa.telefone}</Text>
            <Text style={styles.title}>Email:{empresa.email}</Text>
            <Text style={styles.title}>Categoria Empresa:{}</Text>
          </View>
        </Card>
      </View>
      ))}
  
    </ScrollView>
  );
}

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
    marginTop: 10,
    width: "90%",
  },
  cardtop: {
    width: "90%",
  },
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
