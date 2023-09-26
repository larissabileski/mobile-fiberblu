import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import produtoService from '../src/services/produto'

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);

  async function fetchProdutos(){
    const data= await produtoService.getAllProduto();
    setProdutos(data)
  }

  useEffect(() => {
    fetchProdutos();
  })


  return (
    <ScrollView style={styles.scrollView}>
      {produtos.map((produto) => (
        <View style={styles.container}>
          <Card style={styles.card}>
          <Card.Title title="Modelo do Produto" />
          <View style={styles.informacao}>
            <Text style={styles.title}>Categoria:{produto.categoria}</Text>
            <Text style={styles.title}>Grupo:{produto.grupo}</Text>
            <Text style={styles.title}>Material:{produto.linha}</Text>
            <Text style={styles.title}>Cor:{produto.cor}</Text>
            <Text style={styles.title}>Preço:{produto.preco}</Text>
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
    width: "90%",
    marginTop: 10,
  },
  cardtop: {
    width: "90%",
  },
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default Estoque;