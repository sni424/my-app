import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoMain from "./pages/Todo";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo" element={<TodoMain />} />
        </Routes>
    );
};

export default App;
