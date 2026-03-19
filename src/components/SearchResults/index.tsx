import React from "react";
import Album from "../Album";
import { AlbumInterface } from "../../types/types";



function SearchResults({ albumList, library, updateLibrary}:any){
    
    function addToLibrary (id: number, album: string, artist: string, releaseYear: string, imageUrl: string){
        console.log(id, album, artist, releaseYear);
        updateLibrary((prevFields: []) => [...prevFields, {idAlbum: id, strAlbum: album, strArtist: artist, intYearReleased: releaseYear, strAlbum3DThumb: imageUrl, id:id}])

    }
    console.log(albumList)

    return(
        <>
            {
                albumList.map((album:AlbumInterface) =>(
                    <div className="song" key={album.idAlbum}>
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
                            <button onClick={() => addToLibrary(album.idAlbum, album.strAlbum, album.strArtist, album.intYearReleased, album.strAlbum3DThumb)}>Agregar a mi biblioteca</button>

                        }
                    </div>
                ))
            }
        </>
    )
}

export default SearchResults;