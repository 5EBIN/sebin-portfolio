import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;