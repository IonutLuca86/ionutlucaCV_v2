import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navigation/Navbar'
import Footer from './components/Navigation/Footer'
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router,Route,Routes, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';


function AnimatedRoutes() {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}



const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Fade in + slight slide up
      animate={{ opacity: 1, y: 0 }} // Fully visible
      exit={{ opacity: 0, y: -20 }} // Fade out + slight slide up
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {


  return (
    <Router>
    <div className="page-container">
      <NavigationBar />
      <div className="content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  </Router>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App
