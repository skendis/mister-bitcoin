import React, { Component } from 'react';
import Chart from '../../Components/Chart/Chart.js'
import BitcoinService from '../../services/BitcoinService.js'
class StatisticPage extends Component {
    state = {
        marketPrice: [],
        confirmedTransac: []
    }

    componentDidMount  () {
        this.getMarketPrices();
        this.getConfirmedTransactions();
    }

    async getConfirmedTransactions(){
        const confirmedTransac = await BitcoinService.getConfirmedTransactions();
        this.setState({confirmedTransac:confirmedTransac});
    }
    
    async getMarketPrices(){
        const marketPriceData =  await BitcoinService.getMarketPrice();
        this.setState({marketPrice:marketPriceData});
    }

    render() {
        return (
            <div>
                <h2>Market Price (USD)</h2>
                <Chart chartData={this.state.marketPrice} color="purple"/>
                <h2>Confirmed Trancactions Per Day</h2>
                <Chart chartData={this.state.confirmedTransac} color="blue" />
            </div>
        )
    }
}

export default StatisticPage;