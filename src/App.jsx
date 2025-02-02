
import './App.css';
import Body from './Components/Body/Body';
import Sidebar_left from './Components/Sidebar_1/Sidebar_left';


function App() {
  

  return (
    <div className='flex ' >
        <Sidebar_left />
        {/* <Body/> */}
        <Body/>
        {/* <TodoForm  className="justify-center"/>
       
        {/* <TodoItem className="w-fit"/> */}
    </div>
  );
}

export default App;
