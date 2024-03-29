import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoMain from "./pages/Todo";
import { ThemeProvider } from "styled-components";
import StyledComponent from "./pages/StyledComponent";
import Circle from "./pages/Circle";
import { darkTheme, lightTheme } from "./utils/theme";
import Coin from "./pages/Coins/Coin";
import Coins from "./pages/Coins";
import { GlobalStyle } from "./utils/GlobalStyle";
import Price from "./pages/Coins/Price";
import Chart from "./pages/Coins/Chart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const queryClinet = new QueryClient();

const App = () => {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <QueryClientProvider client={queryClinet}>
                <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Coins />} />
                        <Route path="/:coinID" element={<Coin />}>
                            <Route path="chart" element={<Chart />} />
                            <Route path="price" element={<Price />} />
                        </Route>
                        <Route path="todo" element={<TodoMain />} />
                        <Route path="main" element={<Home />} />
                        <Route path="style" element={<StyledComponent />} />
                        <Route
                            path="circle"
                            element={<Circle bgColor="teal" />}
                        />
                    </Routes>
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default App;
