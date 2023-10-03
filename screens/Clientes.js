import React, { useEffect, useState } from "react";
import {StatusBar} from 'expo-status-bar'
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import empresaService from '../src/services/empresa';

const Empresa = () => {
  const [empresas, setEmpresas] = useState([]);

  async function fetchEmpresas(){
    const data = await empresaService.getAllEmpresa();
    setEmpresas(data)
}

  useEffect(() => { 
    fetchEmpresas();
}, [])

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={{marginTop: '10%', marginStart: '10%'}}>Empresas</Text>
      {empresas.map((empresa) => (
        <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title={empresa.nome} />
          <View style={styles.informacao}>
            <Text style={styles.title}>CNPJ:{empresa.cnpj}</Text>
            <Text style={styles.title}>Endereço:{empresa.endereco}</Text>
            <Text style={styles.title}>Telefone:{empresa.telefone}</Text>
            <Text style={styles.title}>Email:{empresa.email}</Text>
            <Text style={styles.title}>Categoria Empresa:{empresa.categoria}</Text>
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


export default Empresa;