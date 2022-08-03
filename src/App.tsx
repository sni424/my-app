import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoMain from "./pages/Todo";
import { ThemeProvider } from "styled-components";
import StyledComponent from "./pages/StyledComponent";
import Circle from "./pages/Circle";
import { darkTheme, lightTheme } from "./Component/theme";

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Routes>
                <Route path="/" element={<TodoMain />} />
                <Route path="main" element={<Home />} />
                <Route path="style" element={<StyledComponent />} />
                <Route path="circle" element={<Circle bgColor="teal" />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
