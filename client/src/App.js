import './App.css';
import { Component } from 'react';
import Profile from '../src/Components/Profile';

class App extends Component {
  
  render = () => {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
