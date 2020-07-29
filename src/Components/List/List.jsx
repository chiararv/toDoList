import React, { useState } from 'react';
import SetTask from './SetTask';
import UserInput from './UserInput';
import Task from './Task';
// import Filters from './Filters';

const tasksArr = [
  {
    title: "",
    description: "",
    complete: false,
    date: "",
  }
]

const List = ({filters}) => {

  const [tasks, setTasks] =useState([])
  
  const [input, setInput] = useState(false)

  // const [filters, setFilters] = useState(null)

  const showInput = () => {
    setInput(true)
  }

  const addItem = (title) => {
    setTasks([...tasks, {title, complete: false}])
    console.log(tasks)
    setInput(false)
  }

  const completeTask = (title) => {
    console.log(title)
    const taskIndex = tasks.findIndex(task => task.title === title)
    let newTasks = [...tasks]
    newTasks[taskIndex].complete = !newTasks[taskIndex].complete
    setTasks(newTasks)
  }

  const deleteItem = (title) =>{
  
    let newTasks = tasks.filter(task => task.title !== title)
    setTasks(newTasks)
  }

  return ( 
    <div className="List">
      <div className="tarea">
        {      
        input ? <UserInput newTask={addItem} /> : <SetTask newTask={showInput}/>
        }
        {
          (tasks.length > 0) &&
           tasks.filter(task => {
              if(filters === null) return true
              return task.complete === filters
            })
            .map(task => <Task task={task} taskCompleted={completeTask} deleteTask={deleteItem} />)
          
        }
      </div>
      {/* <Filters selectFilter={setFilters} filter={filters}/> */}
    </div>
   );
}
 
export default List;
