const initialState = {
    albums: []
}

const tasksReducer = (state = initialState, action) => {

    switch(action.type){
        case "ADD_ALBUM":
            return{
                ...state,
                album: [...state.album, action.payload]
            }
        case "REMOVE_ALBUM":
            return{
                ...state,
                album: state.album.filter(singleAlbum => singleAlbum.id !== action.payload)
            }
        default:
            return;
    }

}

export default tasksReducer;