import { useState } from 'react'
import { Header } from './components/Header'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

function App() {
  const [count, setCount] = useState(0)

  return (<div>
   
   <Header />
   <p>hello world</p>   
   </div>)
}

export default App
