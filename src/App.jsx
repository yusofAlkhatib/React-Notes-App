import './App.css'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  const author = "Yusof "

  return (
    <>
      < CreatePost />
      < Posts authorName={author} />
    </>
  )
}

export default App
