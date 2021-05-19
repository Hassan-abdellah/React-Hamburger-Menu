import React, {useState} from 'react';
import Nav from './components/Nav';
function App() {

  const [menu, setMenu] = useState(false);
  return (
    <>
      <Nav menu={menu} setMenu={setMenu}/>  
    </>
  );
}

export default App;
