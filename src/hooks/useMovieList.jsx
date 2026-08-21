import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/reduxStore/movieSlice";

import { useEffect } from "react";
import { API_Options } from "../utils/constants";

const useMovieList = () =>{
   const dispatch = useDispatch();
const getMovieList = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_Options );
  const json = await data.json();
  console.log(json);
  if(!json) return;
  dispatch(addNowPlayingMovies(json?.results));
}
useEffect(()=>{
getMovieList();
},[]);
}

export default useMovieList;