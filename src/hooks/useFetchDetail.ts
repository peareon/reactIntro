import { useEffect, useState } from "react";
import axios from "axios";
import { AlbumDetailInterface } from "../types/types";

type FetchDetailState = {
    album: AlbumDetailInterface | null;
    isLoading: boolean;
    error: string | null;
}

const useFetchDetail = (id: string | undefined) =>{
    const [albumState, setAlbumState] = useState<FetchDetailState>({album: null, isLoading: true, error: null});
    const baseURL = "https://www.theaudiodb.com/api/v1/json/";
    const albumDetail = "2/album.php?m=";

    useEffect(() => {

        if(!id) return;

        const fetchMovies = async () => {
            try {
                const response = await axios.get(baseURL+albumDetail+`${id}`)
                setAlbumState({album: response.data.album[0],  isLoading: false, error: null})
            } catch (error) {
                setAlbumState({album: null, isLoading: false, error: "Failed to fetch albums"});
            }
        }
        fetchMovies();
    }, [id])

    return albumState;

}

export default useFetchDetail;