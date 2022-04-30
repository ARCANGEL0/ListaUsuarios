import React, { useState, useEffect } from 'react';
import Task from './Task';
import Btn from './Btn'
import Add from './Add'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


import {useParams, useHistory, useLocation} from 'react-router-dom';
import './App.css';

const Tasks = () => {

// consts

    const history = useHistory();
    const location = useLocation();
    const Voltar = () => {
        history.goBack();
    }

    const { userId } = useParams();

 const [tarefas, setTarefas] = useState([]);

 	const url = "https://jsonplaceholder.typicode.com/users/"+ userId +"/todos";

  

  //funcoes para pegar lista todo

  const fetchTasks = async () => {
    const getTasks = await fetch(
     url
    ).then((res) => res.json());

    setTarefas(getTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);



//remover item todo
 const handleRemove = (tarefaId) => {

  axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}/todos?id=${tarefaId}`)  
      .then(res => {  
        alert("Removido!") 
    })
    const removeTarefa = tarefas.filter((tarefa) => tarefa.id != tarefaId)

    setTarefas(removeTarefa);
  };


//    const handleClick = (tarefaId, tarefaCompleted) => {
//     const click = { completed: !tarefaCompleted };

//   axios.post(`https://jsonplaceholder.typicode.com/users/${userId}/todos?id=${tarefaId}`, click)  
//       .then(res => { 
//     })

// tarefas.map((tarefa) => { 

// if (tarefa.id == tarefaId)  
// 	{
// 		setTarefas(...tarefas, {completed: !tarefa.completed})
// 		console.log(tarefa) 
// 	}

// });

//   };

 function handleClick(id,tarefaCompleted) {
    const newList = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const updatedItem = {
          ...tarefa,
          completed: !tarefa.completed,
        };

        return updatedItem;
      }

      return tarefa;
    });

    setTarefas(newList);
  }


const handleTaskAdd = (tarefaNome) => {
    const newTarefa = [...tarefas, {
      title: tarefaNome,
      id: uuidv4(),
      completed: false,
      text: '',
    },]


    setTarefas(newTarefa);
  };


    return (
        <>
<div className="containerBotao">

            <Btn btnPallete="secondary" onClick={Voltar}>Voltar</Btn>
            <Add handleTaskAdd={handleTaskAdd} />

    </div>

        {tarefas.map((tarefa) => (
        	<>
        	
       		
       		 <Task tarefa={tarefa}  handleClick={handleClick} handleRemove={handleRemove} />

        		</>
        	
         ))}
             </>

    );
};

export default Tasks;