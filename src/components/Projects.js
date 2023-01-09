const Projects = () => {
    return(
        <div className="mx-auto my-0 py-24 px-0">
        <h2 className="flex mt-2 mb-10 mx-0 items-center whitespace-nowrap relative">Here Are Some Things I've Built:</h2>
        <ul>
            <li><ProjectItem/></li>
            <li>EPFO api</li>
            <li>Kingdomino - Group Academic</li>
            <li>Collection of AI projects (Academic)</li>
            <li>Collection of Visual Application projects (Academic)</li>
        </ul>
        </div>
    )
}
const ProjectItem = () => {
    return(
        <div className="grid relative gap-2 items-center grid-cols-12">
            <div className="col-start-7 relative text-right">
                <p>Star Project</p>
                <h3>MUN-BOT</h3>
                <div className="relative z-1 p-6 bg-slate-400"><p>Info</p></div>
                <p>Tech Stack</p>
                <p>Project Link</p>
            </div>
        </div>
    )
}
export default Projects