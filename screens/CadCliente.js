import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import { Dropdown } from 'react-native-element-dropdown';
import ClienteService from "../src/services/clientes";
import categoriaEmpresaService from '../src/services/categoriaempresa';

export default function CadCliente({navigation}){
  const [empresa, setEmpresa] = useState({
    nome:'',
    cnpj:'',
    endereco:'',
    telefone:'',
    telefone:'',
    email:'',
    inscricao_estadual:'',
    classificacao_fiscal:'',
    categoria: null,
});
  // const [cnpj, setCNPJ] = useState({cnpj:''});
  // const [endereco, setEndereco] = useState({endereco:''});
  // const [telefone, setTelefone] = useState({telefone:''});
  // const [email, setEmail] = useState({email:''});
  // const [inscricao_estadual, setInscricao] = useState({inscricao_estadual:''});
  // const [classificacao_fiscal, setClassificacao] = useState({classificacao_fiscal:''});
  // const [categoria, setCategoria] = useState({categoria:''});

  const [categorias, setCategorias] = useState( [])


  async function addEmpresa(){
    await ClienteService.saveCliente(empresa);
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
    // const [selected, setSelected] = useState([]);


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Cadastrar Novo Cliente" />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, nome: text }))
            }
            placeholder="Nome da Empresa"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, cnpj: text }))
            }
            placeholder="CNPJ"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, endereco: text }))
            }
            placeholder="Endereço"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, telefone: text }))
            }
            placeholder="Telefone"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, email: text }))
            }
            placeholder="Email"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, classificacao_fiscal: text }))
            }
            placeholder="Classificação Fiscal"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setEmpresa((empresa) => ({ ...empresa, inscricao_estadual: text }))
            }
            placeholder="Inscrição Estadual"
            keyboardType="text"
          />
          <Dropdown
          style={styles.dropdown}
          data={categorias}
          maxHeight={300}
          labelField="descricao"
          valueField="id"
          value={empresa.categoria}
          onChange={(item) => {
            setEmpresa((empresa) => ({ ...empresa, categoria: item.id }));
          }}
        />
          {/* <MultiSelect
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
              setCategoria(item);
            }}
            selectedStyle={styles.selectedStyle}
          /> */}
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

