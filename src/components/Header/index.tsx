import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

type FormState = {
    album: string;
}

function Header({setTrigger}:any){

    const [form, setForm] = useState<FormState>({
        album: ""
    });


    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setTrigger(form.album);
    };

    const handleAlbumChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }




    return(
        <div>
            <div>
                <Link to={'/'}>
                    <h1>Lexur</h1>
                </Link>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="album" value={form.album} onChange={(e) => handleAlbumChange(e)}></input>
                    <button type="submit" >Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;