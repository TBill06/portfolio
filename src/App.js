import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Connect from './components/Connect.js';
//import Sidebar from './components/Sidebar.js'
import './App.css';

const App = () => {

  return (
    <div className=''>
      <Navbar/>
      {/* <Sidebar /> */}
      <main className='px-40 w-full min-h-screen'>
        <About />
        <Projects />
        <Connect />
      </main>
      <footer className='flex justify-center items-center p-4'>Designed & Built by Tushar!</footer>
    </div>
  );
}

export default App;
