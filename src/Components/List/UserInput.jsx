import React, { useState } from 'react';

const UserInput = ({newTask}) => {
  const [input, setInput] = useState("")

  return ( 
    <div>
      <input type="text" onChange={(event) => setInput(event.target.value)} value={input}/>
      <button onClick={()=>newTask(input)}>Añadir tarea</button>
    </div>
   );
}
 
export default UserInput;