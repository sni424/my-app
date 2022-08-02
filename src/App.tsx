import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoMain from "./pages/Todo";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoMain />} />
            <Route path="main" element={<Home />} />
        </Routes>
    );
};

export default App;
