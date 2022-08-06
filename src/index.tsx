import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);
