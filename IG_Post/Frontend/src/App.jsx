import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './Pages/CreatePost/CreatePost'
import Feed from './Pages/Feed/Feed'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App