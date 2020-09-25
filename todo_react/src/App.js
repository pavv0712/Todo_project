import React from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import TodoAntd from 'Todoantd';




function App() {
  return (
  <>
    <div>
      <div id='logo'>
        <h1>
            Todo Project
        </h1>
      </div>
      <div id='menu'>
        <TodoAntd/>
      </div>
    </div>    
    <div id='content'>
      
    </div>
  </>
  );
}
export default App;
