import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Connect from './components/Connect.js';
import './App.css';

const App = () => {

  return (
    <div>
      <Navbar/>
      <About />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
