import React from 'react'

function MediaInput({Icon,title,color}) {
  return (
    <div className='flex items-center space-x-2 px-3 md:px-5 lg:px-7 mx-2 py-1 cursor-pointer hover:bg-gray-200 rounded-md whitespace-nowrap'>
     <Icon className={`h-7 ${color}`} />
     <p className=' text-xs sm:text-sm xl:text-base'>{title}</p>
    </div>
  )
}

export default MediaInput