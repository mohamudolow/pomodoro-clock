import React from 'react';
import './App.css';

const Header = () => <h1>Pomodoro Clock</h1>;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
      <Header />
      </div>
    );
  }
}

export default App;
