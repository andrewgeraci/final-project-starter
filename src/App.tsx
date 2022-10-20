import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {AndrewCounter} from "./components";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Welcome!
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <div>
                {/* I figured we could each do our own counter since we need multiple custom labels. 
                Mine has the subract in it so that one's done */}
                <AndrewCounter></AndrewCounter>
            </div>
        </div>
    );
}

export default App;