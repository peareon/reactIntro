import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../slices/library.slice";
import searchReducer from "../slices/search.slice";

const store = configureStore({
    reducer: {
        library: libraryReducer,
        searchedSongs: searchReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;