import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/containers/componentea';

function App() {
  const contactoPrueba = {
    nombre: 'Pepe',
    apellido: 'Argento',
    email: 'pepeargento@mailoculto.com',
    conectado: false,
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} ></ComponenteA>  
      </header>
    </div>
  );
}

export default App;
