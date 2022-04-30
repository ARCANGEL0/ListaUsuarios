import React from 'react';
import { FiXSquare, FiEdit,FiCheckSquare} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './App.css';

import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, FrameHexagon } from '@arwes/core';
import './App.css'
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/assemble.mp3';

const animatorGeneral = { duration: { enter: 1500, exit: 200 } };
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };



const Task = ({ tarefa, handleClick, handleRemove }) => {

    const [activate, setActivate] = React.useState(true);

    const history = useHistory();



    const handleTaskInfo = () => {
        history.push(`/${tarefa.id}/${tarefa.title}`, { params: (tarefa.text) });


    }
    return (

        <ArwesThemeProvider>
            <BleepsProvider
                audioSettings={audioSettings}
                playersSettings={playersSettings}
                bleepsSettings={bleepsSettings}
            >
                <StylesBaseline />
                <AnimatorGeneralProvider animator={animatorGeneral}>
                    <div className="container-tarefa" >

                        <FrameHexagon
                            animator={{ animate:false}}
                            palette={tarefa.completed ? 'success' : 'error'}
                            largeLineWidth={2}
                            smallLineWidth={4}
                            smallLineLength={20}
                            hover
                        >
                            <div className="containerTask">
                            <div className="task-title">
                          <h4 style={{fontSize: 14}}>  {tarefa.title}</h4>    

                            </div>
                            <div className="task-buttons">
                                <button className="buttonTask" onClick={() => handleRemove(tarefa.id)}><FiXSquare /> </button>
                                &nbsp;
                                <button className="buttonTask" onClick={() => handleClick(tarefa.id, tarefa.completed)}><FiCheckSquare /></button>
                                &nbsp;

                            </div>
</div>
                        </FrameHexagon>
                    </div>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider >



    )
}

export default Task;