import React, {useState} from 'react';
import List from '../List/List';
import SideMenu from '../Menu/SideMenu';

const Layout = () => {
  const [filters, setFilters] = useState(null)

  return ( 
    <div className="Container">
      <SideMenu selectFilter={setFilters}/>
      <List filters={filters}/>
    </div>
   );
}
 
export default Layout;