import Head from 'next/head';
import Header from '../components/Header';
import { getSession } from 'next-auth/react'
 import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

export default function Home({session}) {
   if(!session) {
    return <Login />
   }else{
    return (
      <div className=' h-screen'>
        <Head>
          <title>Facebook Clone</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/icons8-facebook-48.png" />
        </Head>
        <Header />
        <main className='flex'>
          <Sidebar />
          <Feed />
        </main>
      </div>
    )
   }
  
}


export async function getServerSideProps(context){
  //Get the user
    const session = await getSession(context);

    return{
      props:{
        session
      }
    }
}