import { useEffect, useState } from 'react'
import  axios  from 'axios'
import { Coins } from './Coins'

const App = () => {

  const [coins, setCoins] = useState([])
  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL)
      setCoins(res.data)
    }
    fetchData()
  },[])

  return (
    <div>
      <Coins coins={coins}/>
    </div>
  );
}

export default App;
