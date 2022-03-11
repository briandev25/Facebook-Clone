import React from 'react'
import Image from 'next/image';
function SidebarRow({Icon,title,src}) {
  return (
    <div className='flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-300 rounded-md whitespace-nowrap'>
     {src && <Image className=' rounded-full cursor-pointer' alt='' src={src} width={30} height={30} layout='fixed'  />}
     {Icon && <Icon className=' h-8 w-8 text-blue-500' />}
     <p className=' hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow;