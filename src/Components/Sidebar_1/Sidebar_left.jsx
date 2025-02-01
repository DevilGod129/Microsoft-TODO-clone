import { Calendar1Icon, House, PlusIcon, SidebarIcon, SquareUser, StarIcon, SunIcon } from 'lucide-react'
import React from 'react'

function Sidebar_left() {
  return (
<div class="min-h-screen w-sm bg-[#1D2125] px-4 py-3 flex-col flex justify-between overflow-auto overscroll-contain ">
  <div>
  <div class="flex min-h-15 pb-8 ">
    {/* <!-- Circle --> */}
    <div class="h-14 w-14 rounded-full bg-blue-400 px-4 py-3 text-2xl text-white">PP</div>
    <div>
      <div class="px-3 py-2 text-white">Prasun Paudel
        <div class="text-gray-500">paudelprasun@gmail.com</div>
      </div>
    </div>
  </div>

  <div class="min-h-fit   gap-5  ">


<SidebarLeftItem title={"My Day"} icon={<SunIcon className='text-white size-4' />}/>
<SidebarLeftItem title={"Important"} icon={<StarIcon className='text-pink-400 size-4' />}/>
<SidebarLeftItem title={"Planned"} icon={<Calendar1Icon className='text-green-400 size-4' />}/>
<SidebarLeftItem title={"Assigned to me"} icon={<SquareUser className='text-green-500 size-4' />}/>
<SidebarLeftItem title={"Tasks"} icon={<House className='text-gray-400 size-4' />}/>


     
    <hr class=" h-0.25 w-full  bg-gray-200 border-0 dark:bg-gray-600" />

    {/* Here new groups will be added.... */}

  </div>
  </div>
  
  <div class="text-white w-full flex min-h-5 flex-row  justify-between items-center gap-2 ">
    <div class="flex hover:bg-gray-700 w-full p-2 rounded-lg">
  <PlusIcon/>
<span>New List</span>
    </div>
    <div className='hover:bg-gray-700 flex p-2 rounded-lg'>
   <SidebarIcon />
    </div>

    </div>
</div>
  )
}

export default Sidebar_left



const SidebarLeftItem = ({icon,title}) => {
  return (
    <div class="flex hover:bg-[#3c444c] mb-3 hover:rounded-md p-2 items-center">
{icon}    <div class="text-white px-4  ">
      {title}
    </div>
  </div>
  )
}
