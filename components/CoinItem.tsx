import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CoinInterface from '../interfaces/ICoin';

interface Props {
  coin: CoinInterface;
}

const CoinItem = ({ coin }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <Text style={styles.text}>{coin.name}</Text>
      </View>
      <Text style={styles.text}>{coin.current_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  coinName: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default CoinItem;
