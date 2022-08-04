import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
    // 데이터 얻는법
    return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export const fetchCoinInfo = async (coinID: string) => {
    // 데이터 얻는법
    return await axios
        .get(`${BASE_URL}/coins/${coinID}`)
        .then((res) => res.data);
};

export const fetchCoinTickers = async (coinID: string) => {
    // 데이터 얻는법
    return await axios
        .get(`${BASE_URL}/tickers/${coinID}`)
        .then((res) => res.data);
};
