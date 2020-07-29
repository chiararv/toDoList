import React from 'react';

const Filters = ({selectFilter, className}) => {
   return ( 
    <div className={className}>
      <button onClick={() => selectFilter(null)}>Todas</button>
      <button onClick={() => selectFilter(true)}>Completas</button>
      <button onClick={() => selectFilter(false)}>Incompletas</button>
    </div>
   );
}
 
export default Filters;