import React from 'react';
import './App.css';
import Router from './router/public'
import Index from './router/index'
class App extends React.Component{
  render(){
    return (
        <div>
          <Router a={Index}/>
        </div>
    )
  }
}


export default App;
