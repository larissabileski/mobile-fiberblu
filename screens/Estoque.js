import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import EstoqueService from '../src/services/estoque';

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);

  async function fetchProdutos(){
    const data = await EstoqueService.getAllProdutos();
    setProdutos(data)
}

  useEffect(() => { 
    fetchProdutos();
}, [])

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={{marginTop: '10%', marginStart: '10%'}}>Produtos</Text>
      {produtos.map((produto) => (
        <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title={produto.grupo.descricao} />
          <View style={styles.informacao}>
            <Text style={styles.title}>Cor:{produto.cor}</Text>
            <Text style={styles.title}>Linha:{produto.linha.descricao}</Text>
            <Text style={styles.title}>Grupo:{produto.grupo.descricao}</Text>
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


export default Estoque;