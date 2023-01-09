const Navbar = () => {
    return(
        <>
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="flex flex-wrap p-5 items-center justify-between">
                <a className="font-medium text-white mb-4 md:mb-0 flex-auto">
                    <h1 className="ml-1 text-xl">Tushar Billakanti</h1>
                </a>
                <nav className="md:mr-auto flex flex-wrap items-center text-base">
                    <a href="#About" className="mr-5 text-white">About</a>
                    <a href="#Projects" className="mr-5 text-white">Projects</a>
                    <a href="#Connect" className="mr-5 text-white">Connect</a>
                    <button className="mr-5 text-white">Resume</button>
                </nav>
            </div>
        </header>
        </>
    )
}
export default Navbar