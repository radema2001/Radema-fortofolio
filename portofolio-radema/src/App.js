import './App.css';

import Contact from './Components/ContactMe/Contact';
import Navigasi from './Components/Navigasi/Navigasi';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Project/Project';
import Experience from './Components/Experience/Experience';




function App() {
  return (
    <div className="App"> 
         <Navigasi />
         <Hero />
         <About />
         <Projects />
         {/* <Experience /> */}
         <Contact />
         <Footer />
        
   
    </div>

  );
}

export default App;
