import projects_data from "../data"
const Projects = () => {
    return(
        <>
        <h3 className="text-3xl text-[#CCD6F6] py-2">Here Are Some Things I've Built:</h3>
        <ul className="lg:flex flex-wrap gap-10">
            {projects_data.map(project => <ProjectItem kind={project.kind} name={project.name} desc={project.description} stack={project.stack} link={project.links} />)}
        </ul>
        </>
    )
}
const ProjectItem = (props) => {
    return(
        <div className="shadow-lg p-5 rounded-lg mt-7 text-white bg-[#112240] flex-auto">
            <p className="text-[#58DFC3] text-base font-code">{props.kind}</p>
            <h3 className="text-3xl text-[#CCD6F6] pb-4 pt-1">{props.name}</h3>
            <p className="text-xl text-white pb-1">{props.desc}</p>
            <ul className="list-disc pl-8 pb-4">
                {props.stack.map(point => <li className="text-white text-lg">{point}</li>)}
            </ul>
            <p className="text-lg font-code text-[#58DFC3] ">{props.stack}</p>
            <p>{props.link}</p>
        </div>
    )
}
export default Projects