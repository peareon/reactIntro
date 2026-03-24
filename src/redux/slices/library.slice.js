import { createSlice } from "@reduxjs/toolkit";



const librarySlice = createSlice({
    name: 'library',
    initialState: {
        albums: []
    },
    reducers: {
            addAlbum: (state, action) =>{
                state.albums.push(action.payload);
            },
            removeAlbum: (state, action) =>{
                state.albums = state.albums.filter(album => album.idAlbum !== action.payload)
            }
        }
    }
);


export const {addAlbum, removeAlbum} = librarySlice.actions;

const {reducer: libraryReducer} = librarySlice;
export default libraryReducer;
