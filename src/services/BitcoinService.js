import axios from 'axios';

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins = 1) {
    const res = await _getReq(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    return res;
}

async function getMarketPrice() {
    const res = await _getReq(`https://api.blockchain.info/charts/market-price?format=json&cors=true`);
    return res.values.map(point => point.y);

}
async function getConfirmedTransactions() {
    const res = await _getReq(`https://api.blockchain.info/charts/n-transactions?format=json&cors=true`);
    return res.values.map(point => point.y);
}
async function _getReq(url) {
    const res = await axios.get(url);
    return res.data;
}