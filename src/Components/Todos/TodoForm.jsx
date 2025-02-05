import React from 'react'
import { Plus } from 'lucide-react'
function TodoForm() {
  return (
//     <div class=" w-screen h-screen">
// <form class="flex  justify-self-center ">
//   <input type="text"
//   placeholder="Add a task"
//   class='w-lvh justify-end hover:bg-[#3c444c] border text-white border-black/10 rounded-lg px-3 outline-none duration-150 bg-[#1D2125] py-1.5 fixed bottom-0 left-0 right-0' />
// </form>
// </div>
<form 
      // onSubmit={handleSubmit}
      className="w-full rounded-lg   p-2 bg-[#2D2F2F] hover:bg-[#3a3e3e] hover:cursor-text"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Plus className="w-7 h-7 text-white" />
        <input
          type="text"
          placeholder="Add a task"
          // value="Text"
          // onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 bg-transparent outline-none placeholder-white/50 text-white"
        />
      </div>
    </form>
  )
}

export default TodoForm