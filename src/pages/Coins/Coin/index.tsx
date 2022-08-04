import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
    const { coinID } = useParams();
    console.log(coinID);
    return (
        <div>
            <h1>Coin {coinID}</h1>
        </div>
    );
};

export default Coin;
