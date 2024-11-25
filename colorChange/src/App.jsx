import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor,setBgColor] = useState('#242424');
   
  const getRandomColor = () => {
    const redIndex = Math.floor(Math.random()*256);
    const greenIndex = Math.floor(Math.random()*256);
    const blueIndex = Math.floor(Math.random()*256);
    return `rgb(${redIndex},${greenIndex},${blueIndex})`;
  }

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
    document.body.style.backgroundColor = newColor
  }
  

  return (
    <>
      <div className='masterContainer'>
        <h1>Botão colorido</h1>
        <div className='buttonContainer'>
          <button className='buttonElement' onClick={changeBackgroundColor} ></button>
        </div>
      </div>
    </>
  )
}

export default App
