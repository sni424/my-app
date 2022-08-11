import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../Api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../../atoms";

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface ChartProps {
    coinID: string;
}

const Chart = () => {
    const coinID = useOutletContext<ChartProps>();
    const isDark = useRecoilValue(isDarkAtom);

    const { isLoading, data } = useQuery(["ohlcv", coinID], () =>
        fetchCoinHistory(`${coinID}`)
    );
    return (
        <div>
            {isLoading ? (
                "Loading Chart"
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            data: data?.map((price: IHistorical) => {
                                return [
                                    new Date(price.time_open).getTime(),
                                    parseFloat(price.open),
                                    parseFloat(price.high),
                                    parseFloat(price.low),
                                    parseFloat(price.close),
                                ];
                            }),
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? "dark" : "light",
                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                    upward: "#e84118", // 상승 시 색상
                                    downward: "#0097e6", // 하락 시 색상
                                },
                            },
                        },
                        title: {
                            text: `${coinID} Chart`,
                            align: "left",
                        },
                        chart: {
                            height: 400,
                            width: 550,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },

                        xaxis: {
                            labels: {
                                datetimeFormatter: { month: "mmm 'yy" },
                                style: {
                                    colors: isDark ? "#f5f6fa" : "#192a56",
                                },
                            },
                            type: "datetime",
                            categories: data?.map(
                                (price: IHistorical) => price.time_open * 1000
                            ),
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    colors: isDark ? "#f5f6fa" : "#192a56",
                                },
                            },
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#273c75"],
                                stops: [0, 100],
                            },
                        },
                    }}
                />
            )}
        </div>
    );
};

export default Chart;
