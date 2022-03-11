import React from 'react'
import StoryCard from './StoryCard';

const stories = [
    {
        name: "Papa React",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
      },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Jeff Bezos",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark Zukerburg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map(({name,src,profile}) =>(
            <StoryCard name={name} profile={profile} src={src} key={src} />
        ))}
    </div>
  )
}

export default Stories