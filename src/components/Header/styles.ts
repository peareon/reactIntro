import styled from "styled-components";


const HeaderContainer = styled.div`
    width: 50%;
    justify-content: center;
    text-align: center;
    align-content: center;
    margin: auto;
`

const HeaderTitle = styled.h1`
    font-size: 36px;
    font-weight: 800;
    text-decoration: none;
    color: black;
    margin: 4px;
`

const HeaderInput = styled.input`
    border: 1px solid #bbb;
    padding: 5px;
    &:focus{
        border: 1px solid #ddd;
        outline: 1px solid #ddd;
    }
    &:active{
        border: 1px solid #ddd;
        outline: 1px solid #ddd;
    }
    border-radius: 8px;
    margin: 4px;
`

const HeaderButton = styled.button`
    width: 96%;

`   

const HeaderForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;
    padding-top: 30px;
`

const HeaderWrapper = styled.div`
    align-content: center;
    justify-content: center;
`

export{
    HeaderContainer,
    HeaderTitle,
    HeaderInput,
    HeaderButton,
    HeaderForm,
    HeaderWrapper
}