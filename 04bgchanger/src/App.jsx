import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{background : color}}>

    <div className='fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-5 py-3 rounded-3xl'>
          
        <button onClick={() => setColor("Black")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg'style={{backgroundColor : 'Black'}}>Black</button> 
        <button onClick={() => setColor("Green")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg'style={{backgroundColor : 'Green'}}>Green</button> 
        <button onClick={() => setColor("Blue")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg'style={{backgroundColor : 'Blue'}}>Blue</button> 
        <button onClick={() => setColor("Orange")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg'style={{backgroundColor : 'Orange'}}>Orange</button> 
        <button onClick={() => setColor("Yellow")} className='outline-none px-6 py-2 rounded-full text-black shadow-lg'style={{backgroundColor : 'Yellow'}}>Yellow</button> 
        <button onClick={() => setColor("Purple")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg'style={{backgroundColor : 'Purple'}}>Purple</button> 
        <button onClick={() => setColor("Brown")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg'style={{backgroundColor : 'Brown'}}>Brown</button> 
        <button onClick={() => setColor("Grey")} className='outline-none px-6 py-2 rounded-full text-black shadow-lg'style={{backgroundColor : 'Grey'}}>Grey</button> 
        <button onClick={() => setColor("Pink")} className='outline-none px-6 py-2 rounded-full text-black shadow-lg'style={{backgroundColor : 'Pink'}}>Pink</button> 
      </div>

    </div>
    </div>

    </>
  )
}

export default App
