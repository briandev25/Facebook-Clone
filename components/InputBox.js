import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react'
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon,VideoCameraIcon} from '@heroicons/react/solid'
import MediaInput from './MediaInput';

function InputBox() {
    const {data: session} = useSession();

    const sensPost = (e) =>{
        e.preventDefault();
    }
  return (
    <div className=' bg-white shadow-md mt-8 p-2'>
     <div className='flex space-x-4 p-3 items-center border-b mb-2'>
        <Image className=' rounded-full cursor-pointer' alt='' src={session.user.image} width={30} height={30} layout='fixed'  />
        <form className='flex flex-1'>
            <input className=' focus:outline-none px-5 bg-gray-100 rounded-full h-12 flex-grow placeholder:text-gray-600' type='text' placeholder={`Whats on your mind, ${session.user.name}`} />
            <button className='hidden'>Submit</button>
        </form>
     </div>
     <div className='flex items-center justify-evenly px-3 '>
       <MediaInput Icon={VideoCameraIcon} title='Live video' color='text-red-500' />
       <MediaInput Icon={CameraIcon} title='Photo/Video' color='text-green-400' />
       <MediaInput Icon={EmojiHappyIcon} title='Feeling/Activity' color='text-yellow-300' />
     </div>
    </div>
  )
}

export default InputBox


