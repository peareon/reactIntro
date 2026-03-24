import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AlbumDetailContainer, AlbumDetailGap, AlbumDetailImage, AlbumDetailInfoContainer, AlbumInfoGap } from "./styles";
import { useSelector } from "react-redux";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../redux/slices/status";
import { useAppDispatch } from "../../hooks/hook";
import { fetchAlbumDetail } from "../../redux/slices/search.slice";

function AlbumDetail(){
    const {id} = useParams();

    const detailStatus = useSelector((state:any) => state.searchedSongs?.statusDetail)
    const albumDetail = useSelector((state:any) => state.searchedSongs?.album)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(id){
             dispatch(fetchAlbumDetail(id));
        }
    },[dispatch, id])

    return(
        <AlbumDetailContainer>
            {detailStatus === SUCCEEDED?
                <AlbumDetailGap>
                    <div>
                        <AlbumDetailImage src={albumDetail?.strAlbumThumb} alt="" />
                    </div>
                    <AlbumDetailInfoContainer>
                        <div>
                            <AlbumInfoGap>Artista: {albumDetail?.strArtist}</AlbumInfoGap>
                            <div>Álbum: {albumDetail?.strAlbumStripped}</div>
                        </div>
                        <div>
                            <AlbumInfoGap>Género: {albumDetail?.strGenre}</AlbumInfoGap>
                            <div>Ventas: {albumDetail?.intSales}</div>
                        </div>
                        
                    </AlbumDetailInfoContainer>
                </AlbumDetailGap>
                :
            detailStatus === LOADING ? <p>Cargando información del álbum...</p>:
            detailStatus === FAILED? <p>Ocurrió un error al recuperar la información. Intenta de nuevo</p>: 
            detailStatus === IDLE? <div>No hay álbum disponible</div>:
            <></>
            }
        </AlbumDetailContainer>
    );
}

export default AlbumDetail;