import { useEffect, useState } from "react";
import axios from "axios";
import { AlbumInterface } from "../types/types";


type FetchAlbumsState = {
    albums: AlbumInterface[];
    isLoading: boolean;
    error: string | null;
}

const useFetchAlbums = (album: string) =>{
    const [albumsState, setAlbumsState] = useState<FetchAlbumsState>({albums: [], isLoading: true, error: null});
    const baseURL = "https://www.theaudiodb.com/api/v1/json/";
    const albumSearch = "2/searchalbum.php?s=";
    const albumId = ""

    useEffect(() => {

        if(!album) return;

        const fetchMovies = async () => {
            try {
                const response = await axios.get(baseURL+albumSearch+`${album}`)
                setAlbumsState({albums: response.data.album,  isLoading: false, error: null})
            } catch (error) {
                setAlbumsState({albums: [], isLoading: false, error: "Failed to fetch movies"});
            }
        }
        fetchMovies();
    }, [album])

    return albumsState;

}

export default useFetchAlbums;