import styled from "styled-components";

interface Album {
    releaseYear?:number;
}

const AlbumContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`

const AlbumInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-around;
`

const AlbumImage = styled.img`
    width: 80px;
    height: auto;
    max-width: 80px;
    font-size: 10px;
    text-align: center;
`

const AlbumDetails = styled.div<Album>`
    font-size: 12px;
    font-weight: 500;
    span{
        color: ${props => {
            if(!props.releaseYear) return;
            if(props.releaseYear <= 1950) return '#664c2f'
            if(props.releaseYear > 1950 && props.releaseYear <= 1960) return '#564237'
            if(props.releaseYear > 1960 && props.releaseYear <= 1970) return '#4b392f'
            if(props.releaseYear > 1970 && props.releaseYear <= 1980) return '#342720'
            if(props.releaseYear > 1980 && props.releaseYear <= 1990) return '#2c211b'
            if(props.releaseYear > 1990 && props.releaseYear <= 2000) return '#1b1410'
            if(props.releaseYear > 2000) return '#040303'
            if(props.releaseYear == 0) return '#ffffff'
        }};
        font-size: 11px;
    }
`

export {
    AlbumContainer,
    AlbumInfo,
    AlbumImage,
    AlbumDetails
}