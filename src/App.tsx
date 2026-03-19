import React from "react";
import { useEffect, useState } from 'react';
import Header from './components/Header/index';
import SearchResults from './components/SearchResults/index';
import Library from './components/Library/index';
import { Routes, Route } from 'react-router-dom';
import { AlbumList } from './types/types';
import useFetchAlbums from "./hooks/useFetchAlbums";
import AlbumDetail from "./components/AlbumDetail";


function App() {

  const [library, setLibrary] = useState<AlbumList>([]);
  const [trigger, setTrigger] = useState<string>("");
  const {albums, isLoading, error} = useFetchAlbums(trigger);
  
    // useEffect(()=>{
    //   console.log("Me actualicé");
    //   console.log(library)
    // }, [library, albums])

  return (
    <div className="App">
      <Header 
        setTrigger = {setTrigger}

      />
      <Routes>
        <Route  path='/' element={
          <div>
            {albums?
              <div className='mainContainer'>
                <h3>Search results</h3>
                <div className='searchResults'>
                
                  <SearchResults
                    albumList={albums}
                    library={library}
                    updateLibrary={setLibrary}
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
              </div>: isLoading? <div>Cargando...</div>: error? <div>Error al recuperar la información {error}</div>: <div>Realiza una búsqueda</div>
            }
          </div>
          
        }/>
        <Route  path='/song/:id' element={
          <AlbumDetail
          
          />
        }/>

      </Routes>
      
    </div>
  );
}

export default App;
