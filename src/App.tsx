import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoMain from "./pages/Todo";
import { ThemeProvider } from "styled-components";
import StyledComponent from "./pages/StyledComponent";
import Circle from "./pages/Circle";
import { theme } from "./utils/theme";
import Coin from "./pages/Coins/Coin";
import Coins from "./pages/Coins";
import { GlobalStyle } from "./utils/GlobalStyle";

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<TodoMain />} />
                    <Route path="main" element={<Home />} />
                    <Route path="style" element={<StyledComponent />} />
                    <Route path="circle" element={<Circle bgColor="teal" />} />
                    <Route path="coin" element={<Coins />} />
                    <Route path="coin/:coinID" element={<Coin />} />
                </Routes>
            </ThemeProvider>
        </>
    );
};

export default App;
