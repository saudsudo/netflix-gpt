import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
name: "movie",
initialState: {
    movies: null
},
reducers:{
    addNowPlayingMovies:(state, action) => {
        state.movies = action.payload;
    }
}

});
export const {addNowPlayingMovies} =  movieSlice.actions;
export default movieSlice.reducer;