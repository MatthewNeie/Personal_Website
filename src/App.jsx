import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useRef } from 'react';


function App() {

  const calRef = useRef(null);

  const mechRef = useRef(null);

  const fsRef = useRef(null);

  const homeRef = useRef(null);

  const contactRef = useRef(null);

  return (
    <Router>
          <Routes>
              <Route path="/" element={<Home calRef={calRef}
                                              mechRef={mechRef}
                                              fsRef={fsRef}
                                              homeRef={homeRef}
                                              contactRef={contactRef} />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        <Footer />
    </Router>
  )
}

export default App;
