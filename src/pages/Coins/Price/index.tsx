import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory, fetchCoinTickers } from "../Api";

const Flexdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const BoxDiv = styled.div`
    background-color: ${(props) => props.theme.boxDiv};
    padding: 1rem;
    margin: 0 10px 10px 10px;
    text-align: center;
`;

const Loader = styled.h1`
    text-align: center;
    font-size: 28px;
    display: block;
`;

interface IHistorical {
    close: string;
    high: string;
    low: string;
    market_cap: number;
    open: string;
    time_close: number;
    time_open: number;
    volume: string;
}
interface ChartProps {
    coinID: string;
}

const Price = () => {
    const coinID = useOutletContext<ChartProps>();
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinID],
        () => fetchCoinHistory(`${coinID}`),
        {
            refetchInterval: 20000,
        }
    );

    console.log(data);

    return (
        <Flexdiv>
            {data !== undefined ? (
                data
                    ?.slice(11, 21)
                    .reverse()
                    .map((price, i) => (
                        <BoxDiv key={price.time_close}>
                            <div>{i < 1 ? "오늘" : `${i + 1}일전`}</div>
                            <div>${price.close}</div>
                        </BoxDiv>
                    ))
            ) : (
                <Loader>loding...</Loader>
            )}
        </Flexdiv>
    );
};

export default Price;
