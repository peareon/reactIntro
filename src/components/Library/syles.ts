import styled from "styled-components";


const LibraryContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 45%;
`

const LibraryAlbumsContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    justify-content: center;
`

const LibraryTitleContainer = styled.div`
    margin: 20px auto;
    font-size: 18px;
    font-weight: 600;
    color: #222;
`

const AlbumResponsiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 28%;
    margin-bottom: 5px;
`

export {
    LibraryContainer,
    LibraryAlbumsContainer,
    LibraryTitleContainer,
    AlbumResponsiveContainer
}