import React, { useState } from "react";
import { Button } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <Button onClick={() => setValue(value - 1)}>Subtract One</Button>
            to {value}.
        </div>
    );
}

export default App;
