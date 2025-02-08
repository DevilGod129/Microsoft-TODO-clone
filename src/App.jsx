
import { useSelector } from 'react-redux';
import { Resizable } from 're-resizable';
import Sidebar_left from './Components/Sidebar_1/Sidebar_left';
import Sidebarhidden from './Components/sidebar_hidden/Sidebarhidden';
import Body from './Components/body/Body';


function App() {
  const { visible } = useSelector((state) => state)
  return (
    <div className='flex h-screen w-full' >
      
      <Sidebar_left />
    
      <Body />
      {/* <Body /> */}
      {/* <TodoForm  className="justify-center"/>
        {/* <TodoItem className="w-fit"/> */}
      <Sidebarhidden />
    </div>
  );
}

export default App;
