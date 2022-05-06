export const CoinItem = ({ coin }) => {
    console.log(coin.price_change_percentage_24h.toString().charAt(0))
    return (
        <div className='coin-row'>
            <p>{coin.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={coin.image} alt='' />
                <p>{coin.symbol.toUpperCase()}</p>
            </div>
            <p>${coin.current_price}</p>
            <p className={
                (coin.price_change_percentage_24h.toString().charAt(0) === '-') ? 'red' : 'green'
            }>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${coin.total_volume}</p>
            <p className='hide-mobile'>${coin.market_cap}</p>
        </div>
    )
}