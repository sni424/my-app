import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "./Api/index";
import { Helmet } from "react-helmet";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    a {
        display: flex;
        padding: 20px;
        transition: color 0.2s ease-in;
        align-items: center;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
    margin-bottom: 30px;
    text-align: center;
`;

const Loader = styled.h1`
    text-align: center;
    font-size: 28px;
    display: block;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const Coins = () => {
    const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);

    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header />
            <Title>코인</Title>
            {isLoading ? (
                <Loader>loding...</Loader>
            ) : (
                <CoinList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link
                                to={`/${coin.id}`}
                                state={{ name: coin.name }}
                            >
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    );
};

export default Coins;
