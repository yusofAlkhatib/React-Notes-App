import './App.css'
import Myapp from './myapp'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

function App() {

  const authorName = "Yusof "

  return (
    <>
      < CreatePost />
      < Posts authorName={authorName} />
    </>
  )
}

export default App