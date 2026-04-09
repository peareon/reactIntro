import React from "react";
import Album from "../Album";
import { AlbumInterface } from "../../types/types";
import { AlbumResponsiveContainer, AlbumsFetchedContainer, SearchResultsContainer, SearchTitleContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum } from "../../redux/slices/library.slice";




function SearchResults(){
    
    const searchedList = useSelector((state:any) => state.searchedSongs?.albums)
    const libraryList = useSelector((state:any) => state.library?.albums)
    const dispatcher = useDispatch();


    return(
        <SearchResultsContainer>
            <SearchTitleContainer>
                <h3>Search results</h3>
            </SearchTitleContainer>
            <AlbumsFetchedContainer>
                {
                    searchedList.map((album:AlbumInterface) =>(
                        <AlbumResponsiveContainer key={album.idAlbum}>
                            <Album
                                id = {album.idAlbum}
                                imageUrl = {album.strAlbum3DThumb}
                                title = {album.strAlbum}
                                artist= {album.strArtist}
                                releaseDate = {album.intYearReleased}
                                
                            />
                            {
                                libraryList?.some((element:AlbumInterface) => element.idAlbum === album.idAlbum)?
                                <div></div>:
                                <button onClick={() => dispatcher(addAlbum(album))} role="button">Agregar a mi biblioteca</button>

                            }
                        </AlbumResponsiveContainer>
                    ))
                }
            </AlbumsFetchedContainer>
        </SearchResultsContainer>
    )
}

export default SearchResults;