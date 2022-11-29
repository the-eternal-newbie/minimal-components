import React from 'react';
import './App.css';

import { useState } from 'react';
import { Button, Label, ButtonTypes, Header1, Header2 } from './components';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="card">
                <Label style={{ color: '#1e1d20' }}>Hi, my name is</Label>
                <Header1 style={{ color: '#1e1d20' }}>Carlos Vara.</Header1>
                <Header2 style={{ color: '#1e1d20' }}>I build things for the web</Header2>
                <Label style={{ color: '#1e1d20' }}>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital
                    experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </Label>
                <Button buttonType={ButtonTypes.OUTLINED} onClick={() => setCount(count => count + 1)}>
                    <Label>Check out my course {count}!</Label>
                </Button>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default App;
