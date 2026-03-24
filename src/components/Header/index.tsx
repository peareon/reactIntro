import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderButton, HeaderContainer, HeaderForm, HeaderInput, HeaderTitle, HeaderWrapper } from "./styles";
import { fetchAlbums, resetSearch } from "../../redux/slices/search.slice";
import { useAppDispatch } from "../../hooks/hook";

type FormState = {
    album: string;
}

function Header(){

    const dispatch = useAppDispatch();

    const [form, setForm] = useState<FormState>({
        album: ""
    });


    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch(resetSearch([]));
        dispatch(fetchAlbums(form.album));
    };

    const handleAlbumChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }




    return(
        <HeaderContainer>
            <HeaderWrapper>
                <Link to={'/'}>
                    <HeaderTitle>Lexur</HeaderTitle>
                </Link>
                <HeaderForm onSubmit={(e) => handleSubmit(e)}>
                    <HeaderInput type="text" name="album" value={form.album} onChange={(e) => handleAlbumChange(e)}></HeaderInput>
                    <HeaderButton type="submit" >Search</HeaderButton>
                </HeaderForm>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;