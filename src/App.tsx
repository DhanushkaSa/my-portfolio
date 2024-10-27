import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Technology from './pages/Technology'
import Contact from './pages/Contact'

function App() {
  return (

    <div>
           <BrowserRouter>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/technology" element={<Technology/>}/>
                <Route path="/contact" element={<Contact/>}/>
           </Routes>
           </BrowserRouter>
    </div>



  )
}

export default App
