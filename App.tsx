import React from "react";
import { useState } from 'react';
import Header from './src/components/Header/index';
import SearchResults from './src/components/SearchResults/index';
import Library from './src/components/Library/index';
import { Routes, Route } from 'react-router-dom';
import { AlbumList } from './src/types/types';
import useFetchAlbums from "./src/hooks/useFetchAlbums";
import AlbumDetail from "./src/components/AlbumDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./src/theme";
import GlobalStyle from "./src/theme/GlobalStyles";


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
