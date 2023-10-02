import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Card, DefaultTheme } from "react-native-paper";
import PedidoService from '../src/services/pedidos';
import EmpresaService from '../src/services/empresa';
import PagamentoService from "../src/services/pagamento";
import ProdutoService from '../src/services/produto'

export default function CadPedido({navigation}){
  const [pedido, setPedido] = useState({
  empresa: null,
  pagamento:null,
  itens:null,
})

  const [empresas, setEmpresa] = useState([])
  const [pagamentos, setPagamento] = useState([])
  const [produtos, setProduto] = useState([])
  
  async function addPedido(){
    await PedidoService.savePedido(pedido);
    navigation.goBack();
  }

  async function fetchEmpresa(){
    const data = await EmpresaService.getAllEmpresa();
    setEmpresa(data)
  }

  async function fetchPagamento(){
    const data = await PagamentoService.getAllPagamento();
    setPagamento(data)
  }

  async function fetchProduto(){
    const data = await ProdutoService.getAllProduto();
    setProduto(data)
  }

  useEffect(() => {
    fetchEmpresa();
  }, [])
  useEffect(() => {
    fetchPagamento();
  }, [])
  useEffect(() => {
    fetchProduto();
  }, [])


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Cadastrar Novo Pedido" />
          <Dropdown
          style={styles.dropdown}
          data={empresas}
          maxHeight={300}
          labelField="nome"
          valueField="id"
          value={pedido.empresa}
          onChange={(item) => {
            setPedido((pedido) => ({...pedido, empresa: item.id}));
          }}
          />
          <Dropdown
          style={styles.dropdown}
          data={pagamentos}
          maxHeight={300}
          labelField="descricao"
          valueField="id"
          value={pedido.pagamento}
          onChange={(item) => {
            setPedido((pedido) => ({...pedido, pagamento: item.id}));
          }}
          /><Dropdown
          style={styles.dropdown}
          data={produtos}
          maxHeight={300}
          labelField="categoria"
          valueField="id"
          value={pedido.itens}
          onChange={(item) => {
            setPedido((pedido) => ({...pedido, itens: item.id}));
          }}
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
  dropdown: {
    height: 50,
    backgroundColor: "transparent",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
    textAlign: "justify",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedStyle: {
    borderRadius: 12,
  },
  TouchableOpacity: {
    width: "80%",
    borderRadius: 30,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#16a34a",
  },
  TextTouchableOpacity: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
