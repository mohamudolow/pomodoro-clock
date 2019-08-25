import React from 'react';
import './App.css';

const Header = () => <h1>Pomodoro Clock</h1>;

const SetTimer = ({type, value}) => (
  <div>
  <h2 id={`${type}-label`}>{(`${type}` === 'session') ? 'Session ' : 'Break '}Length</h2>
<div id="setTimers-controls">
<button id={`${type}-decrement`}>&darr;</button>&nbsp;
<div id={`${type}-length`}>{value}</div>&nbsp;
<button id={`${type}-increment`}>&uarr;</buttoqn>
</div>
</div>);

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
breakValue: 5,
sessionValue: 25
}
}

render() {
return (
<div className="App">
<Header />
<div id="setting">
<SetTimer type="break" value={this.state.breakValue} />
<SetTimer type="session" value={this.state.sessionValue} />
</div>
</div>
);
}
}

export default App;
