import React,{ useState } from 'react'
import "./App.css"
import NavBar from './components/navbar/navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, originals } from './urls'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <>
   <NavBar/>
   <Banner/>
   <RowPost url={originals} title='Netflix Originals'/>
   <RowPost url={action} title='Action' isSmall />
   </>
  )
}

export default App
