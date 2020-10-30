import { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';


 function App(props) {
   // initial value state
   // return 2 values using array
   const [menuState, setMenuState] = useState(0);
  // update state 
   const changeMenu = (newMenu) => {
     setMenuState(newMenu);
     console.log("in changeMenu", newMenu);

   }
  return (

      <>
        <Header changeMenu = {changeMenu} menuState = {menuState} />
        <Body changeMenu = {changeMenu} menuState = {menuState}/>
      </>


    )
  }

  export default App; 