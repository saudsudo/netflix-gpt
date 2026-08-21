import React from 'react'


const MainContainer = ({title, overview}) => {
   
  return (
    <div className='flex flex-col m-20 w-5/12 bg-gray-400 text-white font-semibold'>
        <h1 className='text-3xl'> Name of the Movie {title}</h1>
        <p>Descrption of the movie {overview}</p>

    </div>
  )
}

export default MainContainer;