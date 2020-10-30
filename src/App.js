import { Component, useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';


 function App(props) {
   const [menuState, setMenuState] = useState(0);
   const changeMenu = (newMenu) => {
     console.log("in changeMenu", newMenu);

   }
  return (

      <>
        <Header changeMenu = {changeMenu} menuState = {menuState} />
        <Body />
      </>


    )
  }

  export default App;