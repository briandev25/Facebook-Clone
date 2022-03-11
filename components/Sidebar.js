import React from 'react'
import { useSession } from 'next-auth/react';
import {ChevronDownIcon,ShoppingCartIcon,UserGroupIcon} from '@heroicons/react/outline'
import {CalendarIcon,ClockIcon,DesktopComputerIcon,UsersIcon} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow';

function Sidebar() {
    const {data: session} = useSession();
  return (
    <div className='p-2 mt-5 hidden lg:block max-w-[300px]'>
        <SidebarRow src={session.user.image}  title={session.user.name} />
       <SidebarRow Icon={UsersIcon} title='Friends' />
       <SidebarRow Icon={UserGroupIcon}  title='Groups'/>
       <SidebarRow Icon={ShoppingCartIcon} title='Marketplace' />
       <SidebarRow Icon={DesktopComputerIcon}  title='Watch'/>
       <SidebarRow Icon={CalendarIcon}  title='Events'/>
       <SidebarRow Icon={ClockIcon}  title='Memories'/>
       <SidebarRow Icon={ChevronDownIcon}  title='See more'/>

    </div>
  )
}

export default Sidebar