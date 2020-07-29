import React from 'react';
import { BsTrash } from 'react-icons/bs';
// import { MdDone } from 'react-icons/md';



const Task = ({task, taskCompleted, deleteTask}) => {
  console.log(task, "task")
  return ( 
    <div>
      <li>
        <input 
          checked={task.complete}
          type="checkbox"
          name=""
          id=""
          onClick={() => taskCompleted(task.title)}
        />
         <span
          style= {
            task.complete ?
            {textDecoration:"line-through"}
            :
            null
          }
          >
            {task.title}
          </span>
        </li>
      <span onClick={() => deleteTask(task.title) }><BsTrash /></span>
    </div>
   );
}
 
export default Task;

