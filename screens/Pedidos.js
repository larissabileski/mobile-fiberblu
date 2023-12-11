import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import PedidoService from '../src/services/pedidos';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  async function fetchPedidos(){
    const data = await PedidoService.getAllPedidos();
    setPedidos(data)
}

  useEffect(() => { 
    fetchPedidos();
}, [])

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={{marginTop: '10%', marginStart: '10%'}}>Pedidos</Text>
      {pedidos.map((pedido) => (
        <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title={pedido.empresa.nome} />
          <View style={styles.informacao}>
            <Text style={styles.title}>Pagamento:{pedido.pagamento.descricao}</Text>
            <Text style={styles.title}>Data:{pedido.data}</Text>
            <Text style={styles.title}>Data do pagamento:{pedido.dataPagamento}</Text>
            <Text style={styles.title}>Valor:{pedido.valor}</Text>
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


export default Pedidos;