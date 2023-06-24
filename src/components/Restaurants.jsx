import React from 'react'

const Restaurants = () => {
  return (
    <div className='mt-6'>
      <h1 className='font-semibold'>Your restaurants</h1>

      <div className='mt-4'>
        <div className='relative bg-orange-200 px-5 py-12 rounded-lg -z-20'>
            <p className='absolute top-5 left-0 bg-pink-500 px-2 py-1 text-white rounded-r-md'>fast food deals</p>
            <p className='absolute bottom-2 left-3 bg-gray-100 p-1 text-xs rounded-full'>30 mins</p>
        </div>
      </div>
    </div>
  )
}

export default Restaurants
