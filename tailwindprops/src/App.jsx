//import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {
  //const [count, setCount] = useState(0)
  let myobj = {
    userName:"vidyanshu Singh",
    Age :"24"
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >tailwind test</h1>
     <Card1 userName="chai and code" btntext = "click me"/>
     <Card1 userName="vidyanshu Singh" 
    // btntext= "Show Vidyanshu Profile"

     />
    
    </>
  )
}

export default App
