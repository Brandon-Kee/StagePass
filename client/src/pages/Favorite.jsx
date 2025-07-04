import React from 'react'
import { dummyShowsData } from '../assets/assets'
import ShowCard from '../components/ShowCard'
import BlurCircle from '../components/BlurCircle'

const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 pt-32 pb-10">

      <BlurCircle top="150px" left="0px"/>
      <BlurCircle bottom="50px" right="50px"/>

      <h1 className="text-white text-2xl font-semibold mb-6">Now Playing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyShowsData.map((movie) => (
          <ShowCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'> 
    <h1 className="text-3xl font-bold text-center">No movies available</h1>
    </div>
  )
}

export default Favorite
