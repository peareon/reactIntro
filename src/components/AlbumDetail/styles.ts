import styled from "styled-components";


const AlbumDetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 33%;
    margin: auto;
    justify-content: center;
    margin-top: 40px;
`

const AlbumDetailImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 6px;
    font-size: 10px;
    text-align: center;
`

const AlbumDetailInfoContainer = styled.section`
    display: flex;
    justify-content: space-around;
`

const AlbumDetailGap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const AlbumInfoGap = styled.div`
    margin-bottom: 9px;
`


export {
    AlbumDetailContainer,
    AlbumDetailImage,
    AlbumDetailInfoContainer,
    AlbumDetailGap,
    AlbumInfoGap
}