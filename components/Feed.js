import React from 'react'
import InputBox from './InputBox'
import Stories from './Stories'

function Feed() {
  return (
    <div className='flex-grow h-screen overflow-y-auto pb-44 pt-6'>
        <div className=' mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
            {/* Stories */}
            <Stories />
            {/* Input Box */}
            <InputBox />
            {/* Posts */}
        </div>
    </div>
  )
}

export default Feed