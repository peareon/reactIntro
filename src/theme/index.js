import styled from 'styled-components';

const Theme = {
    colors: {
        primary: "#ddd",
        secondary: "#4fd",
        background: "#6ac"
    },

    fonts: {
        base: 'Helvetica, Arial, sans-serif',
    },
    fontsSize: {
        large: '16px',
        medium: '14px',
        small: '10px'
    }
}

const IdleParagraph = styled.p`
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500;
`

const FailedParagraph = styled.p`
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500;
`

const LoadingParagraph = styled.p`
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500;
`

export {
    Theme,
    IdleParagraph,
    FailedParagraph,
    LoadingParagraph
}