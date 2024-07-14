import './App.css'
import { useState } from 'react';

function App() {

let [counter, setCounter ] = useState(15)


  //let Counter = 5

  const addValue = () =>{
    console.log("Value Added", counter);
    //counter = counter+1;
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
  }

  const removeValue = () =>{
    console.log("Removed Value", counter);
    counter = counter-1
    setCounter(counter);
  }

  return (
   <>
    <h1>Vidyanshu And His Carrier in Development</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>
          Add value
    </button>
    <br/>
    <button onClick={removeValue}>
           Remove Value
    </button>
   </>
  )
}

export default App
