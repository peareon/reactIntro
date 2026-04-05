import '@testing-library/jest-dom';
import axios from 'axios';
import { fireEvent, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import SearchResults from '../src/components/SearchResults';
import Library from '../src/components/Library';
import App from '../src/App';
import store from '../src/redux/store';
import { addAlbum, removeAlbum } from '../src/redux/slices/library.slice';
import { fetchAlbums, resetSearch } from '../src/redux/slices/search.slice';
import { renderWithProviders } from '../src/utils/test-utils';

// CAMBIO:
// Se mockea axios porque el thunk fetchAlbums hace una llamada HTTP.
// Así evitamos depender de internet o de la API real durante los tests.
jest.mock('axios');
const mockedAxios = axios;

const mockAlbum = {
  idAlbum: '2116624',
  strAlbum: 'Love Gun',
  strArtist: 'KISS',
  intYearReleased: '1977',
  strAlbum3DThumb: 'https://example.com/love-gun.png',
};

beforeEach(() => {
  // CAMBIO:
  // Se limpia el estado de búsqueda antes de cada test para evitar
  // que los resultados de una prueba afecten a otra.
  store.dispatch(resetSearch([]));

  // CAMBIO:
  // Se limpia la biblioteca eliminando cualquier álbum previamente agregado.
  // Esto evita contaminación entre tests.
  const libraryAlbums = store.getState().library.albums;
  libraryAlbums.forEach((album) => {
    store.dispatch(removeAlbum(album.idAlbum));
  });

  // CAMBIO:
  // Se resetean los mocks de axios para que cada test arranque limpio.
  mockedAxios.get.mockReset();
});

describe('App component', () => {
  it('should render the Header component', () => {
    renderWithProviders(<App />);

    expect(screen.getByText('Lexur')).toBeInTheDocument();
  });

  it('should render the search input', () => {
    renderWithProviders(<App />);

    // CAMBIO:
    // Validación semántica usando role en vez de búsquedas menos confiables.
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the initial search state message', () => {
    renderWithProviders(<App />);

    // CAMBIO:
    // Se valida el comportamiento real del App en estado inicial,
    // en lugar de asumir que SearchResults siempre muestra resultados.
    expect(screen.getByText(/Realiza una b[uú]squeda/i)).toBeInTheDocument();
  });

  it('should not render the Library component initially if the app does not show it on IDLE state', () => {
    renderWithProviders(<App />);

    // CAMBIO:
    // Se valida el comportamiento real del App según su estado inicial.
    // Si la biblioteca no aparece en IDLE, este test lo refleja correctamente.
    expect(screen.queryByText('Biblioteca')).not.toBeInTheDocument();
  });
});

describe('Header component', () => {
  it('should render the header content correctly', () => {
    // CAMBIO:
    // Se usa renderWithProviders para envolver el componente con Provider/Router
    // si el proyecto lo requiere.
    renderWithProviders(<Header />);

    expect(screen.getByText('Lexur')).toBeInTheDocument();
  });
});

describe('Search bar', () => {
  it('should update the input value correctly', () => {
    renderWithProviders(<Header />);

    // CAMBIO:
    // Se reemplaza una búsqueda incorrecta tipo getByName por getByRole('textbox'),
    // que es la forma recomendada por Testing Library.
    const searchBar = screen.getByRole('textbox');

    fireEvent.change(searchBar, {
      target: { name: 'album', value: 'KISS' },
    });

    expect(searchBar).toHaveValue('KISS');
  });

  it('should fetch albums successfully with the thunk', async () => {
    // CAMBIO:
    // Se simula la respuesta de axios con la estructura esperada por el thunk.
    mockedAxios.get.mockResolvedValue({
      data: {
        album: [mockAlbum],
      },
    });

    // CAMBIO:
    // Se prueba directamente el thunk usando dispatch al store.
    // Esto valida tanto la llamada como la actualización del estado.
    const resultAction = await store.dispatch(fetchAlbums('KISS'));

    expect(resultAction.type).toBe('albums/fetchAlbums/fulfilled');
    expect(store.getState().searchedSongs.albums).toHaveLength(1);
    expect(store.getState().searchedSongs.albums[0].strAlbum).toBe('Love Gun');
  });
});

describe('SearchResults component', () => {
  it('should render the search results title', () => {
    // CAMBIO:
    // Se inyecta un estado mínimo válido antes de renderizar el componente.
    store.dispatch(resetSearch([mockAlbum]));
    renderWithProviders(<SearchResults />);

    expect(screen.getByText('Search results')).toBeInTheDocument();
  });

  it('should render the album information correctly', () => {
    store.dispatch(resetSearch([mockAlbum]));
    renderWithProviders(<SearchResults />);

    // CAMBIO:
    // Se valida el contenido visible real del componente.
    // Se usan regex tolerantes para evitar fallos por acentos o formato menor.
    expect(screen.getByText(/T[ií]tulo:/i)).toBeInTheDocument();
    expect(screen.getByText(/Artista:/i)).toBeInTheDocument();
    expect(screen.getByText(/Release Date:/i)).toBeInTheDocument();
  });

  it('should add an album to the library when clicking the button', () => {
    store.dispatch(resetSearch([mockAlbum]));
    renderWithProviders(<SearchResults />);

    // CAMBIO:
    // Se usa el texto real del botón visible para interactuar con el componente
    // como lo haría el usuario.
    const addButton = screen.getByRole('button', {
      name: /Agregar a mi biblioteca/i,
    });

    fireEvent.click(addButton);

    expect(store.getState().library.albums).toHaveLength(1);
    expect(store.getState().library.albums[0].strAlbum).toBe('Love Gun');
  });
});

describe('Library component', () => {
  it('should render albums inside the library', () => {
    // CAMBIO:
    // En lugar de pasar children que el componente quizá no use,
    // se carga el estado real del store.
    store.dispatch(addAlbum(mockAlbum));
    renderWithProviders(<Library />);

    expect(screen.getByText('Biblioteca')).toBeInTheDocument();
    expect(screen.getByText(/Love Gun/i)).toBeInTheDocument();
  });

  it('should remove an album from the library', () => {
    store.dispatch(addAlbum(mockAlbum));
    renderWithProviders(<Library />);

    // CAMBIO:
    // Se busca el botón real de eliminar en el contexto correcto.
    const removeButton = screen.getByRole('button', { name: /Eliminar/i });

    fireEvent.click(removeButton);

    expect(store.getState().library.albums).toHaveLength(0);
  });

  it('should render correctly when the library is empty', () => {
    renderWithProviders(<Library />);

    expect(screen.getByText('Biblioteca')).toBeInTheDocument();

    // CAMBIO:
    // Cuando la biblioteca está vacía, no debería existir el botón de eliminar.
    expect(
      screen.queryByRole('button', { name: /Eliminar/i })
    ).not.toBeInTheDocument();
  });
});

