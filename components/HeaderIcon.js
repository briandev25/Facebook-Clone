import React from 'react'

function HeaderIcon({Icon,title,active}) {
  return (
    <div title={title}>
        <Icon className={` h-11 cursor-pointer font-light text-gray-600 md:hover:bg-slate-100 md:px-4 lg:px-8 py-2 rounded-lg active:border-b-2 border-blue-600 active:scale-95 hover:text-blue-400 ${active && 'text-blue-500'}`}/>
    </div>
  )
}

export default HeaderIcon