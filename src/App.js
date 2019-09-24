import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return(
  <div>
    <h1>HATS PAGE</h1>
   
  </div>
    )
  }


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={false} path='/hats' component={HatsPage}/>
    
      </Switch>
    </div>
  );
}

export default App;
