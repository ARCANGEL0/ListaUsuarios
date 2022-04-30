import React, { useState } from 'react';
import Btn from './Btn';
import Input from './Input';
import './App.css';

const Add = ({ handleTaskAdd }) => {
    const [inputData, setInputData] = useState();
    const [error, setError] = useState('primary');
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddClick = () => {

        if (!inputData) {
            setError('error')


        }
        else {
            handleTaskAdd(inputData);
            setError('primary')

        }

    }
    return (
        <div className="container-add">
            <div className="input-add">
                <Input inputChange={handleInputChange} val={inputData} inputColor={error} className="addInput" type="text" />

            </div>
            <div className="btn-container">
                <Btn btnPallete='success' onClick={handleAddClick}> Adicionar</Btn>
            </div>
        </div>
    )
}

export default Add;