import React from 'react'
import Navbar from '../components/Navbar'
import LocateRestaurant from '../components/LocateRestaurant'
import Restaurants from '../components/Restaurants'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="px-6 my-12">
          <div>
            <p className='text-xl font-semibold'>Good Evening, Mehrez</p>
            <p>What's for dinner? There are 50 restaurants around you.</p>
          </div>

          <LocateRestaurant />
          <Restaurants />
      </div>

    </div>
  )
}

export default Home
