import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/workexperience" element={<WorkExperience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
