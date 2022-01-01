import React from 'react';
import TodoList from './TodoList';

function App() {
  
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add TODO</button>
    <button>Clear Completed TODO</button>
    <div>0 left TODO</div>
    </>
    );

}//end app

export default App;
