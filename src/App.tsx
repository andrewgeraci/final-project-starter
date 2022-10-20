import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";


function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    function addOne(): void {
        setCounter(counter+1);
    }
    function minusOne(): void {
        setCounter(counter-1);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
  
            <Button onClick={addOne}>Plus 1</Button>{counter};
            
            <Button onClick={minusOne}>Minus 1</Button>;        
        </div>
    );
}

export default App;
