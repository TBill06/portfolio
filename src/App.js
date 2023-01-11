import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Connect from './components/Connect.js'

const App = () => {

  return (
    <div className='bg-[#0B192E]'>
      <head><title>Tushar Bill</title></head>
      <Navbar />
      <main className='min-h-screen px-5 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <h2 className="text-6xl py-2 text-[#58DFC3] font-medium md:text-6xl lg:text-9xl">Hello! - My name is</h2>
          <h2 className="text-6xl pt-2 pb-7 text-[#58DFC3] font-medium md:text-6xl lg:text-9xl">TUSHAR</h2>
          <About />
          <Projects />
          <Connect />
        </section>
        <footer className='flex justify-center items-center pb-7 text-white font-code'>Designed & Built by Tushar!</footer>
      </main>
    </div>
  );
}

export default App;
