import React from 'react';
import './App.css';

import { useState } from 'react';
import { Container, ButtonTypes, Button, Header1, Header2, Label, Navbar } from './components';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Navbar>
                <Container containerType="flex" direction="row">
                    <Label>01. About</Label>
                    <Label>02. Experience</Label>
                    <Label>03. Work</Label>
                    <Label>04. Contact</Label>
                    <Button buttonType={ButtonTypes.OUTLINED} onClick={() => setCount(count => count + 1)}>
                        <Label>Resume</Label>
                    </Button>
                </Container>
            </Navbar>
            <Container containerType="flex" className="card">
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
            </Container>
        </div>
    );
}

export default App;
