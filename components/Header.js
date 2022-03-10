import Image from 'next/image'
import React from 'react'
import {BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon,FlagIcon,PlayIcon,UserGroupIcon,ShoppingCartIcon} from '@heroicons/react/outline'
import { signOut,useSession } from 'next-auth/react'
import HeaderIcon from './HeaderIcon'
function Header() {
    const {data: session} = useSession();
  return (
    <div className='flex justify-between items-center sticky top-0 z-50 shadow-md p-2 xl:px-5 bg-white'>
          {/* left */}
        <div className='flex'>
            <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed' />
            <div className=' flex border rounded-full ml-2 px-2 py-1 items-center cursor-pointer bg-gray-100'>
                <SearchIcon className='h-5 w-5  text-gray-600' />
                <input type='text' placeholder='Search Facebook' className=' outline-none bg-transparent hidden lg:block ml-2' />
            </div>
        </div>
        {/* center */}
        <div className='hidden sm:flex items-center justify-center flex-grow'>
            <div className='flex items-center md:space-x-3 md:flex-shrink lg:flex-shrink-0 space-x-6'>
               <HeaderIcon active Icon={HomeIcon} title='Home' />
               <HeaderIcon Icon={FlagIcon} title='Notifications' />
               <HeaderIcon Icon={PlayIcon} title='Watch' />
               <HeaderIcon Icon={ShoppingCartIcon} title='Marketplace' />
               <HeaderIcon  Icon={UserGroupIcon} title='Groups' />
            </div>
        </div>
          {/* right */}
        <div className='flex items-center'>
            <div className='hidden xl:flex items-center'>
                {/* Profile Image Here */}
                 <Image className=' rounded-full cursor-pointer' src={session.user.image} width={30} height={30} layout='fixed' onClick={() => signOut()} />
                 <p className=' font-semibold text-sm pr-3 whitespace-nowrap'>{session.user.name}</p>
            </div>
            <div className='flex items-center space-x-2 mx-2'> 
            <ViewGridIcon className='icon' />
            <ChatIcon className='icon' />
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Header