import React from "react";
import Album from "../Album";
import { AlbumInterface, LibraryList } from "../../types/types";
import { LibraryAlbumsContainer, LibraryContainer, LibraryTitleContainer, AlbumResponsiveContainer } from "./syles";


function Library({ library }: LibraryList ){
    console.log(library);
        return(
        <LibraryContainer>
            <LibraryTitleContainer>Biblioteca</LibraryTitleContainer>
            <LibraryAlbumsContainer>
                {
                    library.map((album:AlbumInterface) =>(
                    <AlbumResponsiveContainer key={album.idAlbum}>
                        <Album 
                            id = {album.idAlbum}
                            imageUrl = {album.strAlbum3DThumb}
                            title = {album.strAlbum}
                            artist= {album.strArtist}
                            releaseDate = {album.intYearReleased}
                        />
                    </AlbumResponsiveContainer>
                    ))

                }
            </LibraryAlbumsContainer>
        </LibraryContainer>
    )
}

export default Library;