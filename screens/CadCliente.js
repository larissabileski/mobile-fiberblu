import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import { MultiSelect } from "react-native-element-dropdown";
import empresaService from "../src/services/empresa";
import categoriaEmpresaService from '../src/services/categoriaempresa'
import categoriaempresa from "../src/services/categoriaempresa";

export default function CadCliente({navigation}){
  const [empresa, setEmpresa] = useState({nome:''});
  const [cnpj, setCNPJ] = useState({cnpj:''});
  const [endereco, setEndereco] = useState({endereco:''});
  const [telefone, setTelefone] = useState({telefone:''});
  const [email, setEmail] = useState({email:''});
  const [inscricao_estadual, setInscricao] = useState({inscricao_estadual:''});
  const [classificacao_fiscal, setClassificacao] = useState({classificacao_fiscal:''});
  const [categoria, setCategoria] = useState({categoria:''});

  const [categorias, setCategorias] = useState( [])


  async function addEmpresa(){
    await empresaService.saveEmpresa(empresa);
    navigation.goBack();
  }

  async function fetchCatEmpresa(){
    const data = await categoriaEmpresaService.getAllCategoriaEmpresa();
    setCategorias(data)
  }

  useEffect(()=> {
    fetchCatEmpresa();
  }, [])

  // const CadCliente = () => {
    const [selected, setSelected] = useState([]);


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Cadastrar Novo Cliente" />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmpresa({nome: text})}
            placeholder="Nome da Empresa"
            value={empresa}
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCNPJ({cnpj: text})}
            value={cnpj}
            placeholder="CNPJ"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEndereco({endereco: text})}
            placeholder="Endereço"
            value={endereco}
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTelefone({telefone: text})}
            placeholder="Telefone"
            value={telefone}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail({email: text})}
            placeholder="Email"
            value={email}
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setClassificacao({classificacao_fiscal: text})}
            placeholder="Classificação Fiscal"
            value={classificacao_fiscal}
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setInscricao({inscricao_estadual: text})}
            placeholder="Inscrição Estadual"
            value={inscricao_estadual}
            keyboardType="text"
          />
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            data={categorias}
            labelField="descricao"
            valueField="id"
            placeholder="Forma de Pagamento"
            value={selected}
            searchPlaceholder="Buscar"
            onChange={(item) => {
              setSelected(item);
            }}
            selectedStyle={styles.selectedStyle}
          />
          <TouchableOpacity style={styles.TouchableOpacity} onPress={()=> addEmpresa()}>
            <Text style={styles.TextTouchableOpacity}>Cadastrar</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ScrollView>
  );
}

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

