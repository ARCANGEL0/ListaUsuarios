import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
  

import Users from './Users';
import Add from './Add';
import './App.css';
import Tasks from './Tasks';



// importacoes do framework arwes pra UI

import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, FrameLines } from '@arwes/core';
import './App.css'
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/assemble.mp3';

const audioSettings = { common: { volume: 0.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };

const App = () => {

  const [activate, setActivate] = React.useState(true);




// funcao pra pegar os usuarios da api
const [users, setUsers] = useState();

  const getUsers = async () => {
    const getResp = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());

    setUsers(getResp);
  };

  useEffect(() => {
    getUsers();
  }, []);


  



 



  return (
    <ArwesThemeProvider>
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <StylesBaseline />
        <AnimatorGeneralProvider >
          <HashRouter>
            <div className="container">
              <FrameLines animator={{ activate }}>



{/*rota usuarios*/}
<Route 
path="/"
exact 
children= {
<>                <h2 className="mainHeader">Usuários</h2>

                         <Users users={users} />
</>
}
/>
      
{/*rota tarefas TODO*/}

                <Route
                  path="/user/:userId/"
                  exact
                  children={                     
<>
       <h2 className="mainHeader">Lista TODO</h2>

                   <Tasks/>

</>
}
                 
                 />


              </FrameLines>
            </div>
          </HashRouter>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>);
};
export default App;