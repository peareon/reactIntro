import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IDLE, SUCCEEDED, LOADING, FAILED } from "./status";

    const baseURL = "https://www.theaudiodb.com/api/v1/json/";
    const albumDetail = "2/album.php?m=";
    const albumSearch = "2/searchalbum.php?s=";


export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (artist:string) => {
    const response = await axios.get(baseURL+albumSearch+artist);
    return response.data.album.slice(0,15);
});


export const fetchAlbumDetail = createAsyncThunk('albums/fetchAlbumDetail', async (id: string | undefined) => {
    const response = await axios.get(baseURL+albumDetail+id);
    return response.data.album[0];
});

const searchSlice = createSlice({
    name: 'searchedSongs',
    initialState: {
        statusSearch: IDLE,
        statusDetail: IDLE,
        albums: [] as any,
        album: {}
    },
    reducers: {
        resetSearch: (state, action) =>{
            state.albums = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchAlbums.pending, (state, action) => {
            state.statusSearch = LOADING;
        })
        .addCase(fetchAlbums.fulfilled, (state, action) =>{
            state.albums = action.payload;
            state.statusSearch = SUCCEEDED;
        })
        .addCase(fetchAlbums.rejected, (state, action) =>{
            state.statusSearch = FAILED;
        })
        .addCase(fetchAlbumDetail.pending, (state, action) => {
            state.statusDetail = LOADING;
        })
        .addCase(fetchAlbumDetail.fulfilled, (state, action) =>{
            state.album = action.payload
            state.statusDetail = SUCCEEDED;
        })
        .addCase(fetchAlbumDetail.rejected, (state, action) =>{
            state.statusDetail = FAILED;
        })
    }
});


export const { resetSearch } = searchSlice.actions;

const {reducer: searchReducer} = searchSlice;
export default searchReducer;
