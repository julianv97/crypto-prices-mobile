interface ICoin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  symbol: string;
  price_change_percentage_24h: number;
}

export default ICoin;
