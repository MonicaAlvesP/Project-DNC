import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'


export function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<><h1>404</h1></>} />
        </Routes>
      </Router>
    </>
  )
}
