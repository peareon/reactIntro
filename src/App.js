import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/index.jsx';
import SearchResults from './components/SearchResults/index.jsx';
import Library from './components/Library/index.jsx';

function App() {


  const [songs, setSongs] = useState([

    {id: 4, title: "No dejes que...", artist: "Caifanes", duration: "4:43"},
    {id: 5, title: "Not like us", artist: "Kendrick Lamar", duration: "5:01"},
    {id: 6, title: "Siempre te vas en las tardes", artist: "Pablo Milanés", duration: "3:40"},
    {id: 7, title: "Rihannon", artist: "Fleetwood Mac", duration: "6:47"},
    {id: 8, title: "Confieso", artist: "Kany García", duration: "3:07"},
    {id: 9, title: "Money", artist: "Pink Floyd", duration: "6:47"},
    {id: 10, title: "Recuerdo de ti", artist: "Geoffrey", duration: "3:27"},
    {id: 11, title: "Estacionario", artist: "Tino el pingüino", duration: "3:12"},

  ]);
  const [library, setLibrary] = useState([{id: 1, title: "No dejes que...", artist: "Caifanes", duration: "4:43"}]);
  const [id, setID] = useState(library.length+1)
  
    useEffect(()=>{
      console.log("Me actualicé");
      console.log(library)
    }, [library])

  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <h3>Search results</h3>
        <div className='searchResults'>
          
          <SearchResults
            songList={songs}
            library={library}
            updateLibrary={setLibrary}
            id={id}
            updateID={setID}
          />
        </div>
        <h3>
          Biblioteca
        </h3>
        <div className='library'>
          <Library
            library={library}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
