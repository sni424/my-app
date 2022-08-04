import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

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

interface LocationState {
    state: {
        name: string;
        rank: number;
    };
}

const Coin = () => {
    const { coinID } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const { state } = useLocation() as LocationState;

    console.log(state);

    return (
        <Container>
            <Header />
            <Title>{state?.name || "Loading"}</Title>
            {loading ? null : <Loader>loding...</Loader>}
        </Container>
    );
};

export default Coin;
