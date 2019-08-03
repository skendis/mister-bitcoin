import React, { Component } from 'react';
import Chart from '../../Components/Chart/Chart.js'
import BitcoinService from '../../services/BitcoinService.js'
class StatisticPage extends Component {
    componentWillMount = async () => {
        const marketPriceData = await BitcoinService.getMarketPrice();
        const confirmedTransac = await BitcoinService.getConfirmedTransactions();
        this.setState({marketPrice:marketPriceData,confirmedTransac:confirmedTransac});
    }
    
    state = {
        marketPrice: [],
        confirmedTransac: []
    }
    render() {
        return (
            <div>
                <h2>Market Price (USD)</h2>
                <Chart chartData={this.state.marketPrice} />
                <h2>Confirmed Trancactions Per Day</h2>
                <Chart chartData={this.state.confirmedTransac} />
            </div>
        )
    }
}

export default StatisticPage;