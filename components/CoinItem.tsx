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
        {/* comprobación .image primer render */}
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.nameContainer}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View style={styles.coinPrice}>
        <Text style={styles.text}>${coin.current_price}</Text>
        <Text style={coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown}>
          {coin.price_change_percentage_24h}%
        </Text>
      </View>
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
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    color: '#fff',
  },
  textSymbol: {
    color: '#9ca3af',
    textTransform: 'uppercase',
  },
  image: {
    width: 50,
    height: 50,
  },
  coinPrice: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  priceUp: {
    color: '#00ff00',
  },
  priceDown: {
    color: '#ff0000',
  },
});

export default CoinItem;
