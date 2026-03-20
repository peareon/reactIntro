import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../../hooks/useFetchDetail";
import { AlbumDetailContainer, AlbumDetailGap, AlbumDetailImage, AlbumDetailInfoContainer, AlbumInfoGap } from "./styles";

function AlbumDetail(){
    const {id} = useParams();
    const {album, isLoading, error} = useFetchDetail(id);
    console.log("album detail: ",album)
    return(
        <AlbumDetailContainer>
            {album?
                <AlbumDetailGap>
                    <div>
                        <AlbumDetailImage src={album.strAlbumThumb} alt="" />
                    </div>
                    <AlbumDetailInfoContainer>
                        <div>
                            <AlbumInfoGap>Artista: {album.strArtist}</AlbumInfoGap>
                            <div>Álbum: {album.strAlbumStripped}</div>
                        </div>
                        <div>
                            <AlbumInfoGap>Género: {album.strGenre}</AlbumInfoGap>
                            <div>Ventas: {album.intSales}</div>
                        </div>
                        
                    </AlbumDetailInfoContainer>
                </AlbumDetailGap>
                :
            isLoading? <p>Cargando información del álbum...</p>:
            error? <p>Ocurrió un error al recuperar la información. Intenta de nuevo {error}</p>:
            <div>No hay álbum disponible</div>}
        </AlbumDetailContainer>
    );
}

export default AlbumDetail;