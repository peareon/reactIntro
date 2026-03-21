
const initialState = {
    albums: []
}

const tasksReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_ALBUM":
            return{
                ...state,
                albums: [...state.albums, action.payload],
            };
        case "REMOVE_ALBUM":
            return{
                ...state,
                albums: state.albums.filter(album => album.idAlbum !== action.payload)
            }
        default: return state;
    }
}

export default tasksReducer;