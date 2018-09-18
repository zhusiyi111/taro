import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Module from './Module';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moduleList: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/getModules`).then(async data => {
      data = await data.json();
      const { list: moduleList } = data;
      this.setState({
        moduleList,
      });
    })

  }

  render() {
    const { moduleList } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {moduleList.map((v, i) => {
          return <Module key={i} data={v} />
        })}
      </div>
    );
  }
}

export default App;
