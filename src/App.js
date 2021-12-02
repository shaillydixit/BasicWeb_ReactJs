import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// state hook class to functional compo
export const App = () => {
  const [count, increaseCount] = useState(9)
  return(
    <div>
      <h1>Functional component {count}</h1>
      <button onClick={(e)=>{{increaseCount(count+3)}}}>Click Me </button>
    </div>
  )
}
export default App;
