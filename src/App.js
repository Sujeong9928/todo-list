import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//HTML 
//CSS 꾸미기 언어


//JS
function App() {
  //reat way
  const [todos, settodos] = useState(["할일 1", "할일 2"]);
  //State = 변화하는 값
  //Reat -> State가 변할때 마다 화면을 다시 그린다.
  //[] array 안에 [할일1, 할일2]저장

  return ( 
    //JSX (javascript code -> HTML convertind)
      <div className="App">
        <h1>TODO LIST</h1>
        <div>
          <input/>
          <button>ADD</button>
        </div>
        {/* DRY Dont Repeat Yourself*/}
        {todos.map((todo, index) => (
          <div key={index}>
            <input type="checkbox" />
            <span>{todo}</span>
            <button>DEL</button>
            </div>
        ) )}
        
      </div>
  );

}

export default App;
