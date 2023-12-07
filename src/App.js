import React from "react";
import NavBar from "./Components/NavBAr/NavBar";
import "./App.css"
import {actions,comedy,horror,romance,documentry} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={actions} title='Action'/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horrer' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentry} title='Documentry' isSmall/>
      
    </div>
  );
}

export default App;
