import React, { useState } from 'react';
import { Home, ImageIcon, MoreHorizontal } from 'lucide-react';
import TodoItem from '../todos/TodoItem';
import TodoForm from '../todos/TodoForm';


function Body() {


  return (
  <div class="flex-1 bg-slate-800 min-h-screen">
      <header className="p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Home className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Tasks</h1>
        </div>
        <div className="flex items-center gap-4">
          <ImageIcon className="w-5 h-5" />
          <MoreHorizontal className="w-5 h-5" />
        </div>
      </header>

      <div className="px-4 space-y-1 mb-24">
        <TodoItem />
      </div>
      
      <div className='center'>
      <TodoForm />
      </div>
</div>
  )
}

export default Body