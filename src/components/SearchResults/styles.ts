import styled from "styled-components";


const SearchResultsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 45%;
`

const AlbumsFetchedContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    justify-content: center;
`

const SearchTitleContainer = styled.div`
    margin: 20px auto;
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
    SearchResultsContainer,
    AlbumsFetchedContainer,
    SearchTitleContainer,
    AlbumResponsiveContainer
}