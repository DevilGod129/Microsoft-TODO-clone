import React, { useState } from 'react';
import { Star } from 'lucide-react';

const TodoItem = () => {
  const [checked, setChecked] = useState(false);
  const [starred, setStarred] = useState(false);

  return (
    
      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
        <div 
          className="flex items-center justify-center w-5 h-5 rounded-full border border-white/30 cursor-pointer hover:bg-white/10"
          onClick={() => setChecked(!checked)}
        >
          {checked && (
            <div className="w-3 h-3 bg-white rounded-full" />
          )}
        </div>
        
        <span className="flex-1 text-white/90">
          hello
        </span>
        
        <Star
          size={20}
          className={`cursor-pointer transition-colors ${
            starred ? 'fill-white text-white' : 'text-white/30 hover:text-white/50'
          }`}
          onClick={() => setStarred(!starred)}
        />
      </div>
    
  );
};

export default TodoItem;