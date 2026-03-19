import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../../hooks/useFetchDetail";

function AlbumDetail(){
    const {id} = useParams();
    const {album, isLoading, error} = useFetchDetail(id);
    console.log("album detail: ",album)
    return(
        <div>
            {album?
                <div>
                    <div>
                        <img src={album.strAlbumThumb} alt="" />
                    </div>
                    <div>
                    <div>Artista: {album.strArtist}</div>
                        <div>Álbum: {album.strAlbumStripped}</div>
                        <div>Género: {album.strGenre}</div>
                        <div>Ventas: {album.intSales}</div>
                    </div>
                </div>
                :
            isLoading? <p>Cargando información del álbum...</p>:
            error? <p>Ocurrió un error al recuperar la información. Intenta de nuevo {error}</p>:
            <div>No hay álbum disponible</div>}
        </div>
    );
}

export default AlbumDetail;