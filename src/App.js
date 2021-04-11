import './App.css';
import ExcelComponent from './excel';
import React, { Component } from 'react'

class App extends Component  {
  componentDidMount(){
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ExcelComponent/>
        </header>
      </div>
    );
  }
}

export default App;
