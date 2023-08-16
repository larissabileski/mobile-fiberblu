import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card, DefaultTheme } from "react-native-paper";

const cliente = [
  { label: 'Cassol', value: '1' },
  { label: 'Galvan', value: '2' },
];
const pagamento = [
  { label: 'Dinheiro', value: '3' },
  { label: 'Pix', value: '4' },
  { label: 'Boleto', value: '5' },
  { label: 'Cartão de Crédito', value: '6' },
  { label: 'Cartão de Débito', value: '7' },
];
const produtos = [
  { label: 'Tanque A - Preto', value: '8' },
  { label: 'Tanque A - Branco', value: '9' },
  { label: 'Tanque A - Bege', value: '10' },
  { label: 'Tanque B - Preto', value: '11' },
  { label: 'Tanque B - Branco', value: '12' },
  { label: 'Tanque B - Bege', value: '13' },
];


const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);

  return (
    <ScrollView>
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
        onChange={item => {
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
        onChange={item => {
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
        onChange={item => {
          setSelected(item);
        }}
        selectedStyle={styles.selectedStyle}
      />
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
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
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
});


//   const produtos = [
//     'Tanque A -  Preto',
//     'Tanque A - Branco',
//     'Tanque A - Bege',
//     'Tanque B -  Preto',
//     'Tanque B - Branco',
//     'Tanque B - Bege',
//   ]    
//   return (
//     <ScrollView style={styles.scrollView}>
//     <View style={styles.container}>
//       <Card style={styles.card}>
//         <Card.Title title="Cadastrar Novo Pedido" />
//         <TouchableOpacity style={styles.button} onPress={toggleCliente}>
//           {renderCliente()}
//           <Text style={styles.buttonText}>{label}</Text>
//           <Icon type="font-awesome" name="chevron-down" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={toggleProduto}>
//           {renderProduto()}
//           <Text style={styles.buttonText}>{label}</Text>
//           <Icon type="font-awesome" name="chevron-down" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={togglePagamento}>
//           {renderPagamento()}
//           <Text style={styles.buttonText}>{label}</Text>
//           <Icon type="font-awesome" name="chevron-down" />
//         </TouchableOpacity>
//       </Card>
//     </View>
//     </ScrollView>
//   );
// };
