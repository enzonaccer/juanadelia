import logo from './logo.svg';
import './App.css';
import {styles} from './constants'
import inicio from "./components/inicio";
import nosotros from "./components/nosotros";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        - B I E N B E N I D O S -  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style = { styles}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


