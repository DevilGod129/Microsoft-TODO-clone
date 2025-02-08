import { Calendar1Icon, House, PlusIcon, SidebarIcon, SquareUser, StarIcon, SunIcon,Search } from 'lucide-react'
import React from 'react'

function Sidebar_left() {
  return (
<div class="h-full w-auto bg-[#1D2125] px-4 py-3 flex-col flex justify-between ">
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

    {/* Search Button.... */}
  {/* <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-800 text-white rounded-md py-2 pl-8 pr-4 outline-none"
        />
        <Search className="w-4 h-4 text-gray-400 absolute left-2 top-3" />
      </div> */}

<SidebarLeftItem title={"My Day"} icon={<SunIcon className='text-white size-4' />}/>
<SidebarLeftItem title={"Important"} icon={<StarIcon className='text-pink-400 size-4' />}/>
<SidebarLeftItem title={"Planned"} icon={<Calendar1Icon className='text-green-400 size-4' />}/>
<SidebarLeftItem title={"Assigned to me"} icon={<SquareUser className='text-green-500 size-4' />}/>
<SidebarLeftItem title={"Tasks"} icon={<House className='text-gray-400 size-4' />} Tasks={<div className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-[#3c444c] text-white text-sm">
              3
            </div>}/>


     
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



const SidebarLeftItem = ({icon,title,Tasks}) => {
  return (
    <div class="flex hover:bg-[#3c444c] mb-3 hover:rounded-md p-2 items-center ">
{icon}    <div class="text-white px-4  ">
      {title}
    </div>
      {/* <span className="ml-auto text-sm rounded-full bg-[#3c444c] h-3 w-3 px-2 py-2 text-white ">{num}</span> */}
      {Tasks}
  </div>
  )
}
