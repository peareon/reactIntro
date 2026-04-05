import Header from './components/Header/index';
import SearchResults from './components/SearchResults/index';
import Library from './components/Library/index';
import { Routes, Route } from 'react-router-dom';
import AlbumDetail from "./components/AlbumDetail";
import { ThemeProvider } from "styled-components";
import {Theme, IdleParagraph, LoadingParagraph, FailedParagraph } from "./theme";
import GlobalStyle from "./theme/GlobalStyles";
import { useSelector } from "react-redux";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./redux/slices/status";


function App() {

  const status = useSelector((state:any) => state.searchedSongs?.statusSearch);


  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <div className="App">
      <Header />
      <Routes>
        <Route  path='/' element={
          <div>
            {status === SUCCEEDED?
              <div className="mainContainer">
                <>
                
                  <SearchResults/>
                </>
                <>
                  <Library/>
                </>
              </div>: status === LOADING ? <LoadingParagraph>Cargando...</LoadingParagraph>: status === FAILED? <FailedParagraph>Error al recuperar la información </FailedParagraph>: status === IDLE? <IdleParagraph>Realiza una búsqueda</IdleParagraph>:
              <></>
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
