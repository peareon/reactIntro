import React from "react";
import Album from "../Album";
import { AlbumInterface } from "../../types/types";
import { AlbumResponsiveContainer, AlbumsFetchedContainer, SearchResultsContainer, SearchTitleContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum } from "../../redux/actions";



function SearchResults({ albumList}:any){
    
    const libraryList = useSelector((state:any) => state.data.albums)
    const dispatcher = useDispatch();


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
                                libraryList.some((element:AlbumInterface) => element.idAlbum == album.idAlbum)?
                                <div></div>:
                                <button onClick={() => dispatcher(addAlbum(album))}>Agregar a mi biblioteca</button>

                            }
                        </AlbumResponsiveContainer>
                    ))
                }
            </AlbumsFetchedContainer>
        </SearchResultsContainer>
    )
}

export default SearchResults;