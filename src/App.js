import React from 'react';
import './App.css';
import {withExtraPropAdded} from "./withExtraPropAdded"
import Menu from "./Menu"
import Favorite from "./Favorite"


function App(props) {
  console.log(props)

  return (
    <>
        <h1>Learning Higher Order Components</h1>
        <Menu />
        <hr />
        <Favorite />
      </>
  );
}

//const withPointlessHOC = withPointlessHOC(App)
export default withExtraPropAdded(App)
