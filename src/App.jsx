
import './App.css';
import Sidebar_left from './Components/Sidebar_1/Sidebar_left';
import SimpleRoundedCheckbox from './Components/test';
import TodoForm from './Components/Todos/TodoForm';
import TodoItem from './Components/Todos/TodoItem';

function App() {
  

  return (
    <div className='flex flex-row overflow-hidden overscroll-contain' >
        <Sidebar_left />
        {/* <TodoForm  className="justify-center"/>
        <SimpleRoundedCheckbox /> */}
        <TodoItem />
    </div>
  );
}

export default App;
