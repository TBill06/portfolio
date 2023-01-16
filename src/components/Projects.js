import projects_data from "../data"
import { FiGithub } from "react-icons/fi"

const Projects = () => {
    return(
        <div className="pb-7">
        <h3 className="text-4xl text-[#CCD6F6] py-2">Here Are Some Things I've Built:</h3>
        <ul className="lg:flex flex-wrap gap-10">
            {projects_data.map(project => <ProjectItem kind={project.kind} name={project.name} desc={project.description} stack={project.stack} points={project.points} link={project.links} />)}
        </ul>
        </div>
    )
}
const ProjectItem = (props) => {
    return(
        <div className="shadow shadow-[#CCD6F6] p-5 rounded-lg mt-7 text-white bg-[#112240] flex-auto transform hover:scale-105 duration-300 ">
            <p className="text-[#58DFC3] text-base font-code">{props.kind}</p>
            <h3 className="text-2xl text-[#CCD6F6] pb-4 pt-1">{props.name}</h3>
            <p className="text-lg text-white pb-1">{props.desc}</p>
            <ul className="list-disc pl-8 pb-4">
                {props.points.map(point => <li className="text-white text-lg">{point}</li>)}
            </ul>
            <p className="text-lg font-code text-[#58DFC3] pb-3">{props.stack}</p>
            <a href={`${props.link}`} rel="noreferrer" target='_blank'  className="text-[#CCD6F6] text-2xl inline-block hover:text-[#58DFC3]"><FiGithub/></a>
        </div>
    )
}
export default Projects