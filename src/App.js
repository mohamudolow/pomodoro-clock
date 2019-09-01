import React from 'react';
import './App.css';
import moment from 'moment';

const Header = () => <h1>Pomodoro Clock</h1>;

const SetTimer = ({type, value, handleClick}) => (
  <div>
  <h2 id={`${type}-label`}>{(`${type}` === 'session') ? 'Session ' : 'Break '}Length</h2>
<div id="setTimers-controls">
<button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>&nbsp;
<div id={`${type}-length`}>{value}</div>&nbsp;
<button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
</div>
</div>);

const Timer = ({ mode, time }) => (
<div>
<h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>
<p id="time-left">{time}</p>
</div>
);

const Controls = ({ active, handleReset, handlePlayPause }) => (
<div id="controls">
<button id="start_stop" onClick={handlePlayPause}>{active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}</button>&nbsp;&nbsp;
<button id="reset" onClick={handleReset}><span>&#8634;</span></button>
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
active: false,
touched: false
}
}

componentDidUpdate(prevProps, prevState) {
if (prevState.time === 0 && prevState.mode === 'session') {
this.setState({time: this.state.breakValue * 60 * 1000, mode: 'break'})
this.audio.play()
} 
if (prevState.time === 0 && prevState.mode === 'break') {
this.setState({time: this.state.sessionValue * 60 * 1000, mode: 'session'})
this.audio.play()
}
}

handleSetTimers = (inc, type) => (
(this.state[type] === 60 && inc) ? 60 : (this.state[type] === 1 && !inc) ? 1 : this.setState({[type] : this.state[type] + (inc ?  +1 : -1)})
)

handlePlayPause = () => (
(this.state.active) ?(clearInterval(this.pomodro), this.setState({active: false})) : (this.state.touched) ? 
(this.pomodro = setInterval(() => this.setState({time: this.state.time - 1000}), 1000), this.setState({active: true})) : 
(this.setState({time: this.state.sessionValue * 60 * 1000, active: true, touched: true}, () => this.pomodro = setInterval(() => this.setState({time: this.state.time - 1000}), 1000)))
);

handleReset = () => {
this.setState({
breakValue: 5,
sessionValue: 25,
mode: 'session',
time: 25 * 60 * 1000,
active: false,
touched: false
})
clearInterval(this.pomodro)
this.audio.pause()
this.audio.currentTime = 0
}

render() {
return (
<div className="App">

<Header /><br />

<div id="setting">
<SetTimer type="break" value={this.state.breakValue} handleClick={this.handleSetTimers}/>
<SetTimer type="session" value={this.state.sessionValue} handleClick={this.handleSetTimers} />
</div><br /><br />

<Timer mode={this.state.mode} time={moment(this.state.time).format('mm:ss')} />

<Controls active={this.state.active} handleReset={this.handleReset} handlePlayPause={this.handlePlayPause} />

<audio id='beep' src={process.env.PUBLIC_URL + '/service-bell.wav'} ref={el=> this.audio = el}></audio>

</div>
);
}
}

export default App;
