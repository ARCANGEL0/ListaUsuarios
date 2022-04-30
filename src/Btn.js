import React from 'react';
import './App.css';
import { Animator } from '@arwes/animation';
import { ArwesThemeProvider, StylesBaseline, Button, Text } from '@arwes/core';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const Btn = ({ children, onClick, btnPallete }) => {

    return (

        <ArwesThemeProvider>
            <StylesBaseline styles={{
                body: { fontFamily: FONT_FAMILY_ROOT },
                button: { margin: '0 20px 20px 0' }
            }} />
            <Animator animator={{ animate: false }}>

                <Button palette={btnPallete} active onClick={onClick} className="btn">
                    {children}
                </Button>

            </Animator>
        </ArwesThemeProvider>
        /* 
        <button onClick={onClick} className="btn">
        {children}
        </button> */
    )
}

export default Btn;