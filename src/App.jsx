import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import TikTok from "./components/TikTok"



const App = () => {
  return (
    <div  className="text-neutral-300 overflow-hidden antialised selection:bg-darkblue-25 selection:text-darkblue-400">
      <div className="mx-auto px-20">
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <TikTok/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
