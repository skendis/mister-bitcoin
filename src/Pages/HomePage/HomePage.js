import React, { Component } from 'react';
import UserService from '../../services/UserService.js';
import BitcoinService from '../../services/BitcoinService.js';
import bitcoinIcon from '../../assets/bitcoin.svg';
import coinIcon from '../../assets/coins.svg';

class HomePage extends Component {
    state = {
        user: {
            name: null,
            coins: null
        },
        btcRate: null
    }
    componentDidMount = async () => {
        const user = await UserService.getUser();
        let btc = await BitcoinService.getRate();
        this.setState({ user: user , btcRate: btc});
    }
    render() {
        return (
            <div>
                <h2>hello <span>{this.state.user.name}!</span></h2>
                <div className="flex column">
                    <div><img alt="bitcoin icon" className="bitcon-icon-img" src={coinIcon}/> COINS: {this.state.user.coins}</div>
                    <div><img alt="coins icon" className="bitcon-icon-img" src={bitcoinIcon}/> BTC: {this.state.btcRate}</div>
                </div>
            </div>
        )
    }
}
export default HomePage;