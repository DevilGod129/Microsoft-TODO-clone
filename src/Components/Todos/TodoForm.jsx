import React from 'react'

function TodoForm() {
  return (
    <div class=" w-screen h-screen">
<form class="flex  justify-self-center ">
  <input type="text"
  placeholder="Add a task"
  class='w-lvh justify-end hover:bg-[#3c444c] border text-white border-black/10 rounded-lg px-3 outline-none duration-150 bg-[#1D2125] py-1.5' />
</form>
</div>
  )
}

export default TodoForm