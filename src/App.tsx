import "./App.css";

import React from "react";

import { ApplicationPage } from "./pages/Application/ApplicationPage";
import { Select } from "./components/Select/Select";

export const App = () => (
    <div className="App">
        {/* <ApplicationPage /> */}
        <Select options={["Option1", "Option2"]} />
    </div>
);
