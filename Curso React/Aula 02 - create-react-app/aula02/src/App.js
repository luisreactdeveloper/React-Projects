import logo from './logo.svg';
import './App.css';

function App() {

  const url = "https://placehold.co/150"
  const name = "vitor"

  function sum(a,b) {
    return a + b
  }

  function Uppercase(name) {
    return name.toUpperCase()
  }

  return (
    <div className="App">
     <h1>Olá {Uppercase(name)}, bem-vindo a programação em React!</h1>
     <p>Some: {sum(1,2)}</p>
     <img src={url} alt="minha imagem" />
    </div>
  );
}

export default App;
