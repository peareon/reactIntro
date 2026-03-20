import React from "react";
import { Link } from "react-router-dom";
import { AlbumContainer, AlbumDetails, AlbumImage, AlbumInfo } from "./styles";

function Album({ title, artist, releaseDate, imageUrl, id }: any){

    return(
        <AlbumContainer>
            <div>
                <Link to={`/song/${id}`}>
                    <AlbumImage
                        src={imageUrl}
                        alt={title}
                    />
                </Link>
            </div>
            <AlbumInfo>
                <AlbumDetails>Título: <span>{title}</span></AlbumDetails>
                <AlbumDetails>Artista: <span>{artist}</span></AlbumDetails>
                <AlbumDetails releaseYear={Number(releaseDate)}>Release Date: <span>{releaseDate}</span></AlbumDetails>
            </AlbumInfo>
        </AlbumContainer>
    )

};

export default Album;