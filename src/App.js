import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Connect from './components/Connect.js'


const App = () => {

  return (
    <div>
      <head><title>Tushar Bill</title></head>
      <Navbar />
      <main className='min-h-screen px-5 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <div className='mb-9'>
          <h2 className="text-5xl py-2 pb-10 text-[#58DFC3] md:text-5xl lg:text-9xl font-normal text-center">Hello — I'm Tushar!</h2>
          <p className='text-[#CCD6F6] sm:text-base md:text-lg lg:text-xl'>Thanks for visiting my portfolio! I'm a Computer Science and Business Student at Memorial University of Newfoundland in St. John's, Canada. I love to build applications which integrate tech into our lives to make it better.</p>
          </div>
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
