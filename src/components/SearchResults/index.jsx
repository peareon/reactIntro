import React from "react";
import Song from "../Song";
import '../../App.css'

function SearchResults({ songList, library, updateLibrary, id, updateID }){
    
    function addToLibrary (title, artist, duration){
        if(library.length != 0){
            updateID(id + 1);
            console.log(id)
        }
        updateLibrary(prevFields => [...prevFields, {id: id, title: title, artist: artist, duration: duration}])

    }

    return(
        <>
            {
                songList.map(song =>(
                    <div className="song">
                        <Song key={song.id}
                            title = {song.title}
                            artist= {song.artist}
                            duration = {song.duration}
                            
                        />
                        {
                            library.some(element => element.artist == song.artist && element.title == song.title)?
                            <div></div>:
                            <button onClick={() => addToLibrary(song.title, song.artist, song.duration)}>Agregar a mi biblioteca</button>

                        }
                    </div>
                ))
            }
        </>
    )
}

export default SearchResults;