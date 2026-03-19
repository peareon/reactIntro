import React from "react";
import { Link } from "react-router-dom";

function Album({ title, artist, releaseDate, imageUrl, id }: any){

    return(
        <div>
            <div>
                <Link to={`/song/${id}`}>
                    <img
                        src={imageUrl}
                        alt={title}
                    />
                </Link>
                
                <div>Título: {title}</div>
                <div>Artista: {artist}</div>
                <div>Release Date: {releaseDate}</div>
            </div>
        </div>
    )

};

export default Album;