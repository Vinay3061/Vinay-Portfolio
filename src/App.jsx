
import './App.css'
import Menu from './Components/menu'
import Introduction from './Components/intro'
import About from './Components/aboutme'
import Work from './Components/work'
import Experience from './Components/experience'
import Contact from './Components/contactus'
import Footer from './Components/footer'

function App() {
  

  return (
   <div className='main'>

    <Menu/>
    <Introduction/>
    <About/>
    <Experience/>
    <Work/>
    <Contact/>
    <Footer/>
   
   </div>

  )
}

export default App
