import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export default function Pedido () {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {/* <form>
        <label><Text>Nome:</Text>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form> */}
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