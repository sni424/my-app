import styled from "styled-components";
import {
    Outlet,
    useLocation,
    useParams,
    useMatch,
    useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../Api";
import { IoArrowBack } from "react-icons/io5";
import Header from "../../../Layout/Header";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
    text-align: center;
`;
const Loader = styled.h1`
    text-align: center;
    font-size: 28px;
    display: block;
`;

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -2rem;
    margin-bottom: 30px;
`;

const IconDiv = styled.div`
    font-size: 3rem;
    margin-top: 10px;
    cursor: pointer;
`;

const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.boxDiv};
    padding: 10px 20px;
    border-radius: 10px;
`;
const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.textColor};
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Description = styled.p`
    margin: 20px 0px;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: ${(props) => props.theme.boxDiv};
    padding: 7px 0px;
    border-radius: 10px;
    color: ${(props) =>
        props.isActive ? props.theme.accentColor : props.theme.textColor};
    a {
        display: block;
    }
`;

const Flexdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

interface LocationState {
    state: {
        name: string;
        rank: number;
    };
}

interface ITag {
    coin_counter: number;
    ico_counter: number;
    id: string;
    name: string;
}

interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    tags: ITag[];
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

const Coin = () => {
    const { coinID } = useParams();
    const navi = useNavigate();

    const { state } = useLocation() as LocationState;

    const priceMatch = useMatch("/:coinId/price");
    const chartMatch = useMatch("/:coinId/chart");

    const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
        ["info", coinID],
        () => fetchCoinInfo(`${coinID}`)
    );
    const { isLoading: tickersLoading, data: tockersData } =
        useQuery<IPriceData>(
            ["tickers", coinID],
            () => fetchCoinTickers(`${coinID}`),
            {
                refetchInterval: 5000,
            }
        );
    // const [loading, setLoading] = useState<boolean>(false);
    // const [info, setInfo] = useState<IInfoData>();
    // const [priceInfo, setPriceInfo] = useState<IPriceData>();

    // const fetchCoin = async () => {
    //     const infoData = await axios(
    //         `https://api.coinpaprika.com/v1/coins/${coinID}`
    //     );
    //     const priceData = await axios(
    //         `https://api.coinpaprika.com/v1/tickers/${coinID}`
    //     );
    //     setInfo(infoData.data);
    //     setPriceInfo(priceData.data);
    //     setLoading(true);
    // };

    const loading = infoLoading || tickersLoading;

    return (
        <Container>
            <Helmet>
                <title>
                    {state?.name
                        ? state.name
                        : loading
                        ? "Loading..."
                        : infoData?.name}
                </title>
            </Helmet>
            <Header />
            <FlexDiv>
                <IconDiv>
                    <IoArrowBack
                        onClick={() => {
                            navi("/");
                        }}
                    />
                </IconDiv>
                <Title>
                    {state?.name
                        ? state.name
                        : loading
                        ? "Loading..."
                        : infoData?.name}
                </Title>
            </FlexDiv>
            {loading ? (
                <Loader>loding...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>{infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Price:</span>
                            <span>
                                ${tockersData?.quotes.USD.price.toFixed(3)}
                            </span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{tockersData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{tockersData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinID}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinID}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <Outlet context={coinID} />
                </>
            )}
        </Container>
    );
};

export default Coin;
