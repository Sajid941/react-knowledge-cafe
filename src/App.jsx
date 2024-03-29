import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  const[readingTime,setReadingTime]=useState(0)
  const handleAddToBookmark=(blog)=>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
    console.log(bookmarks)
  }
  const handleReadingTime=(id,time)=>{
    setReadingTime(readingTime+time)
    const remainingBookmarks=bookmarks.filter(bookmark=>(bookmark.id !== id))
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex mt-20 gap-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
