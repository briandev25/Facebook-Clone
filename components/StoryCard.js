import React from 'react'
import Image from 'next/image'
function StoryCard({name,src,profile}) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer transition duration-200 transform ease-in hover:scale-105'>
        <div className='absolute top-2 left-3'><Image className='  opacity-0 lg:opacity-100 rounded-full z-40' src={profile} width={40} height={40} objectFit='cover'  alt='' /></div>
         <Image className=' object-cover filter brightness-100 hover:brightness-75 rounded-full lg:rounded-2xl xl:rounded-2xl' src={src} alt='' layout='fill' />
    </div>
  )
}

export default StoryCard