import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {AddSubtract, Counter} from "./components";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Welcome to UD CIS Scheduler!
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <div>
                <AddSubtract></AddSubtract>
            </div>
            <div>
                <Counter></Counter>
            </div>
        </div>
    );
}

export default App;
