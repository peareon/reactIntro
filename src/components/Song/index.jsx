import React from "react";
import '../../App.css'

function Song({ title, artist, duration }){

    return(
        <div>
            <div>
                <div>Título: {title}</div>
                <div>Artista: {artist}</div>
                <div>Duración: {duration}</div>
            </div>
        </div>
    )

};

export default Song;