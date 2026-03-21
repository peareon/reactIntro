import React from "react";
import Album from "../Album";
import { AlbumInterface, LibraryList } from "../../types/types";
import { LibraryAlbumsContainer, LibraryContainer, LibraryTitleContainer, AlbumResponsiveContainer } from "./syles";
import { useDispatch, useSelector } from "react-redux";
import { removeAlbum } from "../../redux/actions";


function Library({ library }: LibraryList ){
    
    const dispatch = useDispatch();

    const handleRemove = (id:number) =>{
        dispatch(removeAlbum(id));
    }

    const albums = useSelector((state:any) => state.tasks.album )

        return(
        <LibraryContainer>
            <LibraryTitleContainer>Biblioteca</LibraryTitleContainer>
            <LibraryAlbumsContainer>
                {
                    albums.map((album:AlbumInterface) =>(
                    <AlbumResponsiveContainer key={album.idAlbum}>
                        <Album 
                            id = {album.idAlbum}
                            imageUrl = {album.strAlbum3DThumb}
                            title = {album.strAlbum}
                            artist= {album.strArtist}
                            releaseDate = {album.intYearReleased}
                            onRemove = {() => handleRemove(album.idAlbum)}
                        />
                    </AlbumResponsiveContainer>
                    ))

                }
            </LibraryAlbumsContainer>
        </LibraryContainer>
    )
}

export default Library;