import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex bg-white border border-red items-center">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-red-400'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
