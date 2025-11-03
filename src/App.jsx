import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import Herosection from "./pages/Herosection"
import WelcomeIn from "./component/WelcomeIn"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Projectscard from "./pages/Projects"
import Footer from "./pages/Footer"
import Contact from "./pages/Contact"
import Sidebar from "./pages/Sidebar"


function App() {

  return (
    <section>
    <Routes>
      <Route path="/" element ={<WelcomeIn/>}/>
      <Route path="/herosection" element={<Herosection/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/aboutme" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projectscard/>}/>
      <Route path="/footer" element= {<Footer/>}/>
      <Route path="/contact" element= {<Contact/>}/>
    </Routes>
    
    </section>
  )
}

export default App
