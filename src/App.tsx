import React from "react";
import { useEffect, useState } from 'react';
import Header from './components/Header/index';
import SearchResults from './components/SearchResults/index';
import Library from './components/Library/index';
import { Routes, Route } from 'react-router-dom';
import { AlbumList } from './types/types';
import useFetchAlbums from "./hooks/useFetchAlbums";
import AlbumDetail from "./components/AlbumDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyles";


function App() {

  const [library, setLibrary] = useState<AlbumList>([]);
  const [trigger, setTrigger] = useState<string>("");
  const {albums, isLoading, error} = useFetchAlbums(trigger);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <div className="App">
      <Header 
        setTrigger = {setTrigger}

      />
      <Routes>
        <Route  path='/' element={
          <div>
            {albums?
              <div className="mainContainer">
                <>
                
                  <SearchResults
                    albumList={albums}
                    library={library}
                    updateLibrary={setLibrary}
                  />
                </>
                <>
                  <Library
                    library={library}
                  />
                </>
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
    </ThemeProvider>
  );
}

export default App;
