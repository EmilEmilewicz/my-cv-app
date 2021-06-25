import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj !!!
        </p>
        <a
          className="App-link"
          href="https://radbruk.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          First page in Gatsby !!!
        </a>
      </header>
    </div>
  );
}

export default App;
