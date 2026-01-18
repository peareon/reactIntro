import './App.css';
import Header from './components/Header';
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='songContainer'>
        <Song 
          title = "Estacionario" 
          artist = "Tino el pingüino"
          duration = "3:42"

        />
        <Song 
          title = "Como la flor" 
          artist = "Selena"
          duration = "4:04"

        />
        <Song 
          title = "Tiene espinas el rosal" 
          artist = "Grupo cañaberal"
          duration = "3:55"

        />
      </div>
    </div>
  );
}

export default App;
