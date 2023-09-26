import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import { Card, DefaultTheme } from "react-native-paper";

const cliente = [
  { label: "Cassol", value: "1" },
  { label: "Galvan", value: "2" },
];
const pagamento = [
  { label: "Dinheiro", value: "3" },
  { label: "Pix", value: "4" },
  { label: "Boleto", value: "5" },
  { label: "Cartão de Crédito", value: "6" },
  { label: "Cartão de Débito", value: "7" },
];
const produtos = [
  { label: "Tanque A - Preto", value: "8" },
  { label: "Tanque A - Branco", value: "9" },
  { label: "Tanque A - Bege", value: "10" },
  { label: "Tanque B - Preto", value: "11" },
  { label: "Tanque B - Branco", value: "12" },
  { label: "Tanque B - Bege", value: "13" },
];

const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Cadastrar Novo Pedido" />
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            data={cliente}
            labelField="label"
            valueField="value"
            placeholder="Cliente"
            searchPlaceholder="Buscar"
            value={selected}
            onChange={(item) => {
              setSelected(item);
            }}
            selectedStyle={styles.selectedStyle}
          />
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            data={pagamento}
            labelField="label"
            valueField="value"
            placeholder="Forma de Pagamento"
            searchPlaceholder="Buscar"
            value={selected}
            onChange={(item) => {
              setSelected(item);
            }}
            selectedStyle={styles.selectedStyle}
          />
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            data={produtos}
            labelField="label"
            valueField="value"
            placeholder="Produtos"
            searchPlaceholder="Buscar"
            value={selected}
            onChange={(item) => {
              setSelected(item);
            }}
            selectedStyle={styles.selectedStyle}
          />
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.TextTouchableOpacity}>Cadastrar</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ScrollView>
  );
};

export default MultiSelectComponent;

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
