import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" id="wrapper">
        <img src={logo} className="App-logo" alt="logo" />
    <div id="canvas">
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <ul>* Learn React</ul>
        <ul>* Climb Mt.Everest</ul>
        <ul>* Run a marathon</ul>
        <ul>* Feed the dogs</ul>
    </div>
    </div>
  );
}

export default App;
