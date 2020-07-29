import React from 'react';
import { IoIosAdd } from 'react-icons/io';


const SetTask = ({newTask}) => {
  return ( 
    <div>
      <IoIosAdd onClick={newTask} /><span>Nueva tarea</span>
    </div>
   );
}
 
export default SetTask;

