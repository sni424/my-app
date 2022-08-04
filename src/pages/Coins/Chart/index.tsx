import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../Api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: string;
}

interface ChartProps {
    coinID: string;
}

const Chart = () => {
    const coinID = useOutletContext<ChartProps>();

    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinID], () =>
        fetchCoinHistory(`${coinID}`)
    );
    console.log(data?.map((a) => typeof a.close));
    return (
        <div>
            {isLoading ? (
                "Loading Chart"
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data:
                                data?.map((price) => parseFloat(price.close)) ??
                                [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: { show: false },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { datetimeFormatter: { month: "mmm 'yy" } },
                            type: "datetime",
                            categories: data?.map(
                                (price) => price.time_close * 1000
                            ),
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#0be881"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
};

export default Chart;
