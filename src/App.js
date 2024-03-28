import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="m-0">
    <div className="h-screen w-screen bg-black m-auto p-auto">     
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>  
    </div>
    </div>
  );
}

export default App;
