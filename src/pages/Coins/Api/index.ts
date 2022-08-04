import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;
const Teacher_NICO = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;

export const fetchCoins = async () => {
    // 데이터 얻는법
    return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export const fetchCoinInfo = async (coinID: string) => {
    return await axios
        .get(`${BASE_URL}/coins/${coinID}`)
        .then((res) => res.data);
};

export const fetchCoinTickers = async (coinID: string) => {
    return await axios
        .get(`${BASE_URL}/tickers/${coinID}`)
        .then((res) => res.data);
};

export const fetchCoinHistory = async (coinID: string) => {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    return await axios.get(`${Teacher_NICO}${coinID}`).then((res) => res.data);
};
