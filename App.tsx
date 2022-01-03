import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import CoinItem from './components/CoinItem';
import CoinInterface from './interfaces/ICoin';
/* import { getCoins } from './api/CoinApi'; */

export default function App() {
  const [coins, setCoins] = useState<CoinInterface[]>([{ id: '', name: '', image: '', current_price: 0 }]);

  const loadData = (): void => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crypto Prices</Text>
        <TextInput style={styles.searchInput} placeholder="Search a Coin" placeholderTextColor="#858585" />
      </View>
      <FlatList data={coins} renderItem={({ item }) => <CoinItem coin={item} />} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374151',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 'bold',
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});
