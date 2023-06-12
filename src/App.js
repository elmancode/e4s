
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Footer from "./components/Footer"
import About from "./page/About";
import Contact from "./page/Contact";
import Service from "./page/Service";
import Projects from "./page/Projects.jsx";
import MICS from "./page/MICS";

function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element= { <About/>}/>
        <Route path="/contact" element= { <Contact/>}/>
        <Route path="/service" element= { <Service/>}/>
        <Route path="/projects" element= { <Projects/>}/>
        <Route path="/MICS" element= { <MICS/>}/>
      
      </Routes>


      <Footer/>

   
    </div>
  );
}

export default App;
