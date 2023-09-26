import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";

export default function Estoque() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.cardtop}>
          <Card.Title title="Produtos Cadastrados" />
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Modelo do Produto" />
          <View style={styles.informacao}>
            <Text style={styles.title}>Linha:</Text>
            <Text style={styles.title}>Seção:</Text>
            <Text style={styles.title}>Categoria:</Text>
            <Text style={styles.title}>Material:</Text>
            <Text style={styles.title}>Cor:</Text>
            <Text style={styles.title}>Preço:</Text>
            <Text style={styles.title}>Quantidade em estoque:</Text>
          </View>
        </Card>
      </View>
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