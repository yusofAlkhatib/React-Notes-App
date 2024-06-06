import './App.css'

import { useState } from 'react'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  // let authorName = "Yusof "
  // let authorName = "Yusof "

  const [authorName,setauthorName] = useState('Yusof')

  const hello = () =>{
    // authorName = 'mahmoud hassan'
    setauthorName('mahmoud hassan')

    console.log(authorName)
  }


  return (
    <>

    <h1> Hello {authorName}</h1>

      <button onClick={hello}> Click </button>

      

      {/* < CreatePost />
      < Posts author={authorName} /> */}
    </>
  )
}

export default App
