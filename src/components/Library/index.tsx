import React from "react";
import Album from "../Album";
import { AlbumInterface, LibraryList } from "../../types/types";
import { LibraryAlbumsContainer, LibraryContainer, LibraryTitleContainer, AlbumResponsiveContainer } from "./syles";
import { useDispatch, useSelector } from "react-redux";
import { removeAlbum } from "../../redux/actions";


function Library({ library }: LibraryList ){
    
    const albumList = useSelector((state:any) => state.data.albums)
    const dispatch = useDispatch();
    const hanldeRemove = (id:any) => {
        dispatch(removeAlbum(id));
    }

    return(
        <LibraryContainer>
            <LibraryTitleContainer>Biblioteca</LibraryTitleContainer>
            <LibraryAlbumsContainer>
                {
                    albumList.map((album:AlbumInterface) =>(
                    <AlbumResponsiveContainer key={album.idAlbum}>
                        <Album 
                            id = {album.idAlbum}
                            imageUrl = {album.strAlbum3DThumb}
                            title = {album.strAlbum}
                            artist= {album.strArtist}
                            releaseDate = {album.intYearReleased}
                            onRemove = {() => hanldeRemove(album.idAlbum)}
                        />
                    </AlbumResponsiveContainer>
                    ))

                }
            </LibraryAlbumsContainer>
        </LibraryContainer>
    )
}

export default Library;