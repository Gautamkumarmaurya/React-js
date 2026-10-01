import { useState } from 'react' 
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)    // it Hooks use to useState
 

  const addValue = () =>{
    setCounter(counter + 1)
    console.log("Value added successfully...", counter);
  }

  const removeValue = () => {
    if(counter === 0){ 
      return console.log("sorry it can't remove value...");
      
    }else{
          setCounter(counter - 1)
          console.log("Counter remove value Successfully...",counter)
    }

  }

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter value : {counter}</h2>
      <br />
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button disabled = {counter === 0} onClick={removeValue}>
        Remove Value {counter}
      </button>
      

      <footer>
        footer : {counter}
      </footer>
      
    </>
  )
}

export default App
