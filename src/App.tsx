import React from 'react';
import './App.css';

import { useState } from 'react';
import { Button, Label } from './components';

function App() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <div>
                <Label darkMode={darkMode} type="header-1">
                    This is a big header!
                </Label>
                <Label darkMode={darkMode} type="header-2">
                    This is a sub header or a medium headerg
                </Label>
                <Label darkMode={darkMode} type="header-3">
                    This is a sub sub header (a little bit smaller)g
                </Label>
                <Label darkMode={darkMode} type="header-4">
                    This is a small sub header, let's write a larger text for this heheg
                </Label>
                <Label darkMode={darkMode} type="header-5">
                    This is the smallest subheader before a paragraph, so this is a very long text just for testing
                </Label>
                <Label darkMode={darkMode} type="header-6">
                    This is the smallest subheader before a paragraph, so this is a very long text just for testing
                </Label>
                <Label darkMode={darkMode}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae, dolor voluptate error tempora
                    eum eaque commodi ex aperiam obcaecati voluptatum alias eius sed soluta nam debitis. Ad, hic qui.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel excepturi quaerat amet maiores
                    doloribus nulla incidunt provident rem, consequatur eligendi deleniti. Quos labore omnis aliquam
                    itaque minima ipsam iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus
                    eaque suscipit ex veritatis placeat! Omnis, perferendis. Debitis facilis voluptate at deserunt
                    incidunt, dolor nesciunt doloremque tempore repellat sequi quaerat. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam accusamus maiores doloremque exercitationem! Dolorum at in ipsam?
                    Reiciendis neque iure, rerum quia possimus facilis, itaque eaque id repellendus maxime libero.
                </Label>
            </div>
            <div>
                <Label darkMode={darkMode} type="header-1" textStyle="secondary">
                    This is a big header!
                </Label>
                <Label darkMode={darkMode} type="header-2" textStyle="secondary">
                    This is a sub header or a medium headerg
                </Label>
                <Label darkMode={darkMode} type="header-3" textStyle="secondary">
                    This is a sub sub header (a little bit smaller)g
                </Label>
                <Label darkMode={darkMode} type="header-4" textStyle="secondary">
                    This is a small sub header, let's write a larger text for this heheg
                </Label>
                <Label darkMode={darkMode} type="header-5" textStyle="secondary">
                    This is the smallest subheader before a paragraph, so this is a very long text just for testing
                </Label>
                <Label darkMode={darkMode} type="header-6" textStyle="secondary">
                    This is the smallest subheader before a paragraph, so this is a very long text just for testing
                </Label>
                <Label darkMode={darkMode} textStyle="secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae, dolor voluptate error tempora
                    eum eaque commodi ex aperiam obcaecati voluptatum alias eius sed soluta nam debitis. Ad, hic qui.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel excepturi quaerat amet maiores
                    doloribus nulla incidunt provident rem, consequatur eligendi deleniti. Quos labore omnis aliquam
                    itaque minima ipsam iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus
                    eaque suscipit ex veritatis placeat! Omnis, perferendis. Debitis facilis voluptate at deserunt
                    incidunt, dolor nesciunt doloremque tempore repellat sequi quaerat. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam accusamus maiores doloremque exercitationem! Dolorum at in ipsam?
                    Reiciendis neque iure, rerum quia possimus facilis, itaque eaque id repellendus maxime libero.
                </Label>
            </div>
            <div style={{ border: '1px solid black', padding: '10px' }}>
                <Button buttonType="outlined" darkMode={darkMode} onClick={() => setCount(count => count + 1)}>
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button buttonType="text" darkMode={darkMode} onClick={() => setCount(count => count + 1)}>
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button buttonType="flat" darkMode={darkMode} onClick={() => setCount(count => count + 1)}>
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button buttonType="elevated" darkMode={darkMode} onClick={() => setCount(count => count + 1)}>
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button buttonType="filled" darkMode={darkMode} onClick={() => setDarkMode(prev => !prev)}>
                    <Label>Toggle dark mode</Label>
                </Button>
            </div>

            <div style={{ border: '1px solid black', padding: '10px', marginTop: '5px' }}>
                <Button
                    buttonType="outlined"
                    darkMode={darkMode}
                    theme="secondary"
                    onClick={() => setCount(count => count + 1)}
                >
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button
                    buttonType="text"
                    darkMode={darkMode}
                    theme="secondary"
                    onClick={() => setCount(count => count + 1)}
                >
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button
                    buttonType="flat"
                    darkMode={darkMode}
                    theme="secondary"
                    onClick={() => setCount(count => count + 1)}
                >
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button
                    buttonType="elevated"
                    darkMode={darkMode}
                    theme="secondary"
                    onClick={() => setCount(count => count + 1)}
                >
                    <Label>Check out my course {count}!</Label>
                </Button>
                <Button
                    buttonType="filled"
                    darkMode={darkMode}
                    theme="secondary"
                    onClick={() => setDarkMode(prev => !prev)}
                >
                    <Label>Toggle dark mode</Label>
                </Button>
            </div>
        </div>
    );
}

export default App;
