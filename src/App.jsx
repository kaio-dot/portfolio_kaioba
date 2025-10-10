import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import DoomGame from "./components/doomGame";

function App(){
  return (
    <Router>
      <div className = "min-h-screen flex flex-col bg-gray-950 text-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<DoomGame />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;