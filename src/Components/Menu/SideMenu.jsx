import React from 'react';
import Filters from '../List/Filters';
import { MdMenu } from 'react-icons/md';


const SideMenu = ({selectFilter}) => {
  return ( 
    <div  className="SideMenu">
      <div className="HamburgerMenu">
        <MdMenu/>
      </div>
      <div className="SideMenu--content">
      <h4>Hoy</h4>
          <Filters className="FiltersContainer" selectFilter={selectFilter}/>
      </div>
    </div>
   );
}

export default SideMenu;