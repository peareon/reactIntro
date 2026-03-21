import React from "react";
import Album from "../Album";
import { AlbumInterface } from "../../types/types";
import { AlbumResponsiveContainer, AlbumsFetchedContainer, SearchResultsContainer, SearchTitleContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../redux/actions";



function SearchResults({ albumList, library, updateLibrary}:any){
    
    const dispatch = useDispatch();

    function addToLibrary (id: number, album: string, artist: string, releaseYear: string, imageUrl: string){
        console.log(id, album, artist, releaseYear);
        updateLibrary((prevFields: []) => [...prevFields, {idAlbum: id, strAlbum: album, strArtist: artist, intYearReleased: releaseYear, strAlbum3DThumb: imageUrl, id:id}])

    }
    console.log(albumList)

    return(
        <SearchResultsContainer>
            <SearchTitleContainer>
                <h3>Search results</h3>
            </SearchTitleContainer>
            <AlbumsFetchedContainer>
                {
                    albumList.map((album:AlbumInterface) =>(
                        <AlbumResponsiveContainer key={album.idAlbum}>
                            <Album
                                id = {album.idAlbum}
                                imageUrl = {album.strAlbum3DThumb}
                                title = {album.strAlbum}
                                artist= {album.strArtist}
                                releaseDate = {album.intYearReleased}
                                
                            />
                            {
                                library.some((element:AlbumInterface) => element.idAlbum == album.idAlbum)?
                                <div></div>:
                                <button onClick={() => dispatch(addAlbum(album))}>Agregar a mi biblioteca</button>

                            }
                        </AlbumResponsiveContainer>
                    ))
                }
            </AlbumsFetchedContainer>
        </SearchResultsContainer>
    )
}

export default SearchResults;