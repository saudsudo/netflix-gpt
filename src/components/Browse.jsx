import React, { useEffect, useState } from 'react'
import Header from './Header'
import useMovieList from '../hooks/useMovieList';
import MainContainer from './MainContainer';
import MovieListContainer from './MovieListContainer';
import { useSelector } from 'react-redux';
import { log } from 'firebase/firestore/pipelines';

const Browse = () => {
useMovieList();

    const movies = useSelector((store) => store.movie.movies);

  console.log("movies "+JSON.stringify(movies));
  const [title, setTitle] = useState(null)
    const [overview, setOverview] = useState(null)

  useEffect(() => {
    if(movies) {const{title, overview} = movies[0];
    setOverview(overview)
    setTitle(title)
  }
  },[movies])

  return (
    <div>
  {movies &&   
  <><div><Header/></div>
  <div><MainContainer title ={title} overview={overview}/></div>
    <div><MovieListContainer/></div> </>}
    </div> 
  )
}

export default Browse