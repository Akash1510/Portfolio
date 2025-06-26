
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import Home from './components/Home'
// import Hero from './components/Hero'
// import Skill from './components/Skill'
// import Experience from './components/Experience'
// import Project from './components/Project'
// import Social from './components/Social'
// import Highlight from './components/Highlights'


function App() {

  return (
    <>
    <Router>
    <Navbar />
<Routes>


   {/* <Route path="/" element = {<Hero/>}/>
   <Route path="/#skills" element = {<Skill/>}/>
   <Route path='/experience' element = {<Experience/>}/>
   <Route path='/#projects' element = {<Project/>}/>
    <Route path="/" element = {<Social/>}/>
    <Route path='/#highlights' element={<Highlight/>}/> */}
    <Route path='/' element={<Home/>}/>

</Routes>
    </Router>
    </>
  )
}

export default App
