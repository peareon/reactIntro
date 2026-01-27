import React from "react";
import Song from "../Song";
import '../../App.css'

function Library({ library }){

        return(
        <>
            {
                library.map(song =>(
                <div className="song">
                    <Song key={song.id}
                        title = {song.title}
                        artist= {song.artist}
                        duration = {song.duration}
                    />
                </div>
                ))

            }
        </>
    )
}

export default Library;