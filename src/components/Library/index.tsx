import React from "react";
import Album from "../Album";
import { AlbumInterface, LibraryList } from "../../types/types";


function Library({ library }: LibraryList ){
    console.log(library);
        return(
        <>
            {
                library.map((album:AlbumInterface) =>(
                <div className="song" key={album.idAlbum}>
                    <Album 
                        id = {album.idAlbum}
                        imageUrl = {album.strAlbum3DThumb}
                        title = {album.strAlbum}
                        artist= {album.strArtist}
                        releaseDate = {album.intYearReleased}
                    />
                </div>
                ))

            }
        </>
    )
}

export default Library;