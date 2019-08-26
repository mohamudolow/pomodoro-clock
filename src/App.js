import React from 'react';
import './App.css';
import moment from 'moment';

const Header = () => <h1>Pomodoro Clock</h1>;

const SetTimer = ({type, value}) => (
  <div>
  <h2 id={`${type}-label`}>{(`${type}` === 'session') ? 'Session ' : 'Break '}Length</h2>
<div id="setTimers-controls">
<button id={`${type}-decrement`}>&darr;</button>&nbsp;
<div id={`${type}-length`}>{value}</div>&nbsp;
<button id={`${type}-increment`}>&uarr;</button>
</div>
</div>);

const Timer = ({ mode, time }) => (
<div>
<h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>
<p id="time-left">{time}</p>
</div>
);

const Controls = ({ active }) => (
<div id="controls">
<button id="start_stop">{active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}</button>&nbsp;&nbsp;
<button id="reset"><span>&#8634;</span></button>
</div>
);

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
breakValue: 5,
sessionValue: 25,
mode: 'session',
time: 25 * 60 * 1000,
active: false
}
}

render() {
return (
<div className="App">
<Header />
<div id="setting">
<SetTimer type="break" value={this.state.breakValue} />
<SetTimer type="session" value={this.state.sessionValue} />
</div><br /><br />
<div>
<Timer mode={this.state.mode} time={moment(this.state.time).format('mm:ss')} />
<Controls active={this.state.active} />
</div>
</div>
);
}
}

export default App;
