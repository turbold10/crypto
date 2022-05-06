import { CoinItem }from './CoinItem'

export const Coins = ({ coins }) => {

    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {
                    coins.map((coin, i) => {
                        return(
                            <CoinItem coin = {coin} key={i}/>
                            )
                    })
                }

            </div>
        </div>
    )
}