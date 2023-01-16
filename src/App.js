import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Connect from './components/Connect.js'
//import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {

  return (
    //<ParallaxProvider>
    <div className='bg-[#0B192E]'>
      <head><title>Tushar Bill</title></head>
      <Navbar />
      <main className='min-h-screen px-5 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <div className='mb-20'>
            <div className='flex justify-center items-center'>
            <h2 className="text-6xl py-2 text-[#58DFC3] font-medium md:text-6xl lg:text-9xl">Hello!</h2>
            <span className='text-6xl text-[#58DFC3] px-5 hover:scale-x-150 hover:duration-300'>——</span>
            <h2 className='text-6xl py-2 text-[#58DFC3] font-medium md:text-6xl lg:text-9xl'>My Name is</h2>
            </div>
          <h2 className="text-6xl pt-2 pb-7 text-[#58DFC3] font-medium md:text-6xl lg:text-9xl">Tushar!</h2>
          <p className='text-white text-xl'>Thanks for visiting my portfolio. I'm a Computer Science and Business Student at Memorial University of Newfoundland in St. John's, Canada. I love to build applications which integrate tech into our lives to make it better.</p>
          </div>
          <About />
          <Projects />
          <Connect />
        </section>
        <footer className='flex justify-center items-center pb-7 text-white font-code'>Designed & Built by Tushar!</footer>
      </main>
    </div>
   //</ParallaxProvider>
  );
}

export default App;
