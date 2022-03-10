import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login() {
  return (
      <div className='grid place-items-center'>
    <Head>
    <title>Facebook Login</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/icons8-facebook-48.png" />
  </Head>
    <div className='flex flex-col mt-10 '>
        <Image src='https://links.papareact.com/5me' width={250} height={250} objectFit='contain' />
        <button onClick={() =>signIn()} className='px-6 py-2 bg-blue-500 text-gray-50 rounded-lg mt-10 active:bg-gradient-to-b from-blue-600 to-transparent active:scale-95 transition duration-150 ease-in-out'>Login with Facebook</button>
    </div>
    </div>
  )
}

export default Login