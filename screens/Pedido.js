import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, DefaultTheme, TextInput } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

const Pedido = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const [text, setCliente] = React.useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Boleto', value: 'boleto'},
    {label: 'Cheque', value: 'cheque'}
  ]);
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
      <TextInput
        label="Cliente"
        value={text}
        onChangeText={text => setCliente(text)}
      />
      <DropDown
              label={"Pagamento"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={value}
              setValue={setValue}
              list={items}
            />
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  }
});

export default Pedido;