import React,{useRef,useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react'
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon,VideoCameraIcon} from '@heroicons/react/solid'
import MediaInput from './MediaInput';

function InputBox() {
    const {data: session} = useSession();
    const inputRef = useRef(null);
    const fileInputRef = useRef(null);
    const [imagePost,setImagePost] = useState(null);

    const sendPost = (e) =>{
        e.preventDefault();
        if(!inputRef.current.value) return;
    }
    const getImageFile =(e) =>{
       const reader = new FileReader();
       if(e.target.files[0]){
         reader.readAsDataURL(e.target.files[0]);
       }
       reader.onload =(readerEvent) =>{
         setImagePost(readerEvent.target.result);
       }
    }
    const removeImage =() =>{
      setImagePost(null);
    }
  return (
    <div className=' bg-white shadow-md mt-8 p-2'>
     <div className='flex space-x-4 p-3 items-center border-b mb-2'>
        <Image className=' rounded-full cursor-pointer' alt='' src={session.user.image} width={30} height={30} layout='fixed'  />
        <form className='flex flex-1'>
            <input ref={inputRef} className=' focus:outline-none px-5 bg-gray-100 rounded-full h-12 flex-grow placeholder:text-gray-600' type='text' placeholder={`Whats on your mind, ${session.user.name}`} />
            <button onClick={sendPost} type='submit' className='hidden'>Submit</button>
        </form>
        {imagePost && <div  className=' flex flex-col items-center hover:brightness-110 transition duration-150 transform hover:scale-105'>
          <img src={imagePost} className=' h-10 object-contain' /> 
          <p onClick={removeImage} className=' text-sm cursor-pointer'>Remove</p>
          </div>}
     </div>
     <div className='flex items-center justify-evenly px-3 '>
       <MediaInput Icon={VideoCameraIcon} title='Live video' color='text-red-500' />
       <div onClick={() =>fileInputRef.current.click()}>
         <MediaInput Icon={CameraIcon} title='Photo/Video' color='text-green-400' />
         <input ref={fileInputRef} type='file' hidden onChange={getImageFile} />
         </div>
       <MediaInput Icon={EmojiHappyIcon} title='Feeling/Activity' color='text-yellow-300' />
     </div>
    </div>
  )
}

export default InputBox


