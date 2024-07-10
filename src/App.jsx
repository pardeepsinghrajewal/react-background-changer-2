import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState(0)

  useEffect(()=>{
    changeBackgroundColor(color);
  },[color])

  
  const changeBackgroundColor = (color) =>{
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="container">
        <button onClick={()=>{setColor('red')}} >Red</button>
        <button onClick={()=>{setColor('yellow')}}>Yellow</button>
        <button onClick={()=>{setColor('blue')}}>Blue</button>
        <button onClick={()=>{setColor('pink')}}>Pink</button>
      </div>
    </>
  )
}

export default App
